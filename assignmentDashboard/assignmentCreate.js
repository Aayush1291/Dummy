import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker from 'react-native-document-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from "./assignmentCreate.styles";
import { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useAppSelector } from '../store/hooks';
import Loading from '../components/header/loading';

const AssignmentCreationScreen = () => {
  const user = useAppSelector(state => state.profile.data);
  const [open, setOpen] = useState(false);
  const [className, setClassName] = useState('');
  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [submissionType, setSubmissionType] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([
    {
      label: 'PDF',
      value: 'pdf'
    },
    {
      label: 'Link',
      value: 'link'
    },
  ]);
  const [selectedFile, setSelectedFile] = useState(null);
  let url = null;
  const assignmentObject = {
    postedBy: user.email,
    className: className,
    title: title,
    DOS: selectedDate.toISOString(),
    link: null,
    pdf: null,
    pdflink: null,
  }

  const handleCreateAssignment = async () => {
    setLoading(true);
    if (submissionType === 'link') {
      assignmentObject.link = link;
    }
    else if (submissionType === 'pdf') {
      try {
        assignmentObject.pdf = selectedFile[0].name;
        const response = await storage().ref(`/Assignments/${selectedFile[0].name}`).putFile(selectedFile[0].fileCopyUri);
        url = await storage().ref(`/Assignments/${selectedFile[0].name}`).getDownloadURL();
        assignmentObject.pdf = selectedFile[0].name;
        assignmentObject.pdflink = url;
      } catch (error) {
        Alert.alert("Assignment Posting Falied...!!");
        return;
      }
    }
    try {
      const docRef = await firebase.firestore().collection('Assignments').add(assignmentObject);
      console.log('Assignment added with ID: ', docRef.id);
      setLoading(false);
      Alert.alert("Assignment created successfully!!!");
    }
    catch (error) {
      console.log("Error==>", error);
      Alert.alert("Assignment uploading failed...!");
    }


    console.log("Output===>", assignmentObject);
  }
  const formattedDate = selectedDate.toDateString();

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        copyTo: 'cachesDirectory',
      });
      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the document picker.');
      } else {
        console.log('Error while picking the file:', err);
      }
    }
  };

  const handleTitleChange = (item) => {
    console.log("Item received:", item);
    setSubmissionType(item);
  };

  return (
    <View style={styles.innerContainer}>
      {!loading && (<KeyboardAvoidingView behavior="padding">
        <Text style={styles.label}>Class Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Class Name"
          value={className}
          onChangeText={setClassName}
        />
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          
        />
        <Text style={styles.label}>Selected Date:</Text>
        <TextInput
          style={[styles.input, styles.selectedDateText]}
          value={formattedDate}
          editable={false}
        />
        <View style={styles.datePicker}>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.touchableOpacity}
          >
            <Text style={styles.buttonText}>Select Date of Submission</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display='default'
              minimumDate={new Date()}
              maximumDate={new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)} // Add 7 days (7 * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
              onChange={(event, date) => {
                setShowDatePicker(false);
                if (date) {
                  setSelectedDate(date);
                }
              }}
            />
          )}

        </View>
        <Text style={styles.label}>Assignment Type:</Text>
        <DropDownPicker
          style={styles.picker}
          textStyle={{ color: 'black' }}
          dropDownDirection="TOP"
          open={open}
          value={submissionType}
          items={items}
          setOpen={setOpen}
          onSelectItem={(items) => handleTitleChange(items.value)}
          containerStyle={styles.dropDownContainer}
        />

        {submissionType === 'link' && (
          <TextInput
            style={[styles.input, styles.linkInput]}
            placeholder="Link"
            value={link}
            onChangeText={setLink}
          />
        )}
        {submissionType === 'pdf' && (
          <TouchableOpacity
            onPress={selectFile}
            style={[styles.touchableOpacity, styles.button]}
          >
            <Text style={styles.buttonText}>Select PDF File</Text>
          </TouchableOpacity>
        )}
        {selectedFile && (<Text style={styles.label}>Selected Document: {selectedFile[0].name}</Text>)}
        <TouchableOpacity
          onPress={handleCreateAssignment}
          style={[styles.touchableOpacity, styles.button]}
        >
          <Text style={styles.buttonText}>Post Assignment</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>)}
      {loading && (
              <Loading />
            )}
    </View>
  );
};

export default AssignmentCreationScreen;






