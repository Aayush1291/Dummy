import React, { useState,useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, Platform } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from "./Notesupload.styles.js";
import { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Loading from '../components/header/loading';
import { useAppSelector } from '../store/hooks';
import {
    Provider,
  } from 'react-native-paper';
const NotesCreationScreen = () => {
    const [open, setOpen] = useState(false);
    const [className, setClassName] = useState(false);
    const [title, setTitle] = useState('');
    const [classDropdownOpen, setClassDropdownOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [subject, setSubject] = useState(false);
    const [loading, setLoading] = useState(false);
    const classOptions = Array.from({ length: 21 }, (_, index) => ({
        label: `P${index + 1}`,
        value: `P${index + 1}`
    }));
    const [items, setItems] = useState([]);
    const user = useAppSelector(state => state.profile.data);
    useEffect(() => {
        fetchSubjects(); // Fetch subjects when component mounts
    }, []);
    const fetchSubjects = async () => {
        try {
            const snapshot = await firebase.firestore().collection('Subjects').get(); // Assuming subjects are stored in a 'Subjects' collection
            const subjects = snapshot.docs.map(doc => ({ label: doc.data().Subject, value: doc.data().Subject }));
            setItems(subjects);
        } catch (error) {
            console.error('Error fetching subjects:', error);
        }
    };

    const [selectedFile, setSelectedFile] = useState(null);
    let url = null;
    const assignmentObject = {
        postedBy: user.email,
        className: className,
        title: title,
        link: null,
        pdf: null,
        pdflink: null,
    }

    const handleCreateAssignment = async () => {

        setLoading(true);
            try {
                assignmentObject.pdf = selectedFile.name;
                const response = await storage().ref(`/${subject}/${selectedFile.name}`).putFile(selectedFile.fileCopyUri);
                url = await storage().ref(`/${subject}/${selectedFile.name}`).getDownloadURL();
                assignmentObject.pdf = selectedFile.name;
                assignmentObject.pdflink = url;
            } catch (error) {
                console.log("Error posting==>",error)
                Alert.alert("Notes Posting Falied...!!");
                return;
            }
        try {
            const docRef = await firebase.firestore().collection('Assignments').add(assignmentObject);
            console.log('Assignment added with ID: ', docRef.id);
            setLoading(false);
            Alert.alert("Notes created successfully!!!");
        }
        catch (error) {
            console.log("Error==>", error);
            Alert.alert("Notes uploading failed...!");
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
            setSelectedFile(res[0]);
            console.log("File==>",res[0])
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled the document picker.');
            } else {
                console.log('Error while picking the file:', err);
            }
        }
    };


    const handleClassChange = (itemValue) => {
        setClassName(itemValue);
    };
    const handleTitleChange = (itemValue) => {
        setSubject(itemValue);
    };

    return (
        <Provider>
        <View style={styles.innerContainer}>
            {!loading && (<KeyboardAvoidingView behavior="padding">
                <Text style={styles.label}>Class Name</Text>
                <DropDownPicker
                    style={styles.picker}
                    textStyle={{ color: 'black' }}
                    open={classDropdownOpen}
                    value={className}
                    items={classOptions}
                    placeholder="Select Class Name"
                    setOpen={setClassDropdownOpen}
                    onSelectItem={(item) => handleClassChange(item.value)}
                    containerStyle={styles.dropdownContainer}
                    scrollable={true}
                    zIndex={9999.}
                />
                <Text style={styles.label}>Select subject:</Text>
                <DropDownPicker
                    style={styles.picker}
                    textStyle={{ color: 'black' }}
                    open={open}
                    value={subject}
                    items={items}
                    setOpen={setOpen}
                    placeholder="Select Subject"
                    onSelectItem={(items) => handleTitleChange(items.value)}
                    containerStyle={styles.dropdownContainer}
                />
                                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Title"
                    value={title}
                    onChangeText={setTitle}

                />

                    <TouchableOpacity
                        onPress={selectFile}
                        style={[styles.touchableOpacity, styles.button]}
                    >
                        <Text style={styles.buttonText}>Select PDF File</Text>
                    </TouchableOpacity>
                {selectedFile && (<Text style={styles.label}>Selected Document: {selectedFile.name}</Text>)}
                <TouchableOpacity
                    onPress={handleCreateAssignment}
                    style={[styles.touchableOpacity, styles.button]}
                >
                    <Text style={styles.buttonText}>Upload Notes</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>)}
            {loading && (
                <Loading />
            )}
        </View>
        </Provider>
    );
};

export default NotesCreationScreen;