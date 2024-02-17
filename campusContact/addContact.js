import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert, ScrollView } from 'react-native';
import styles from './styles';
import ModalDropdown from 'react-native-modal-dropdown';
// import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const AddContact = () => {

  const [image, setImage] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isImagePicking, setIsImagePicking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [post, setPost] = useState('');
  const [institute, setInstitute] = useState('');
  const [branch, setBranch] = useState('')

  const handleImagePicker = async () => {
    try {
      setIsSelected(false)
      const selectedImages = await ImagePicker.openPicker({
        multiple: false,
        mediaType: 'photo',
        minFiles: 2,
        maxFiles: 6,
      });


      console.log('Selected images:', selectedImages);
      setImage(selectedImages);
      setSelectedImages(selectedImages);
      setTimeout(() => {
        setIsLoading(true);
        uploadImagesToFirebase(selectedImages);
      }, 1000);
    } catch (error) {
      console.error('Error picking images:', error);
    }
  };

  const uploadImagesToFirebase = async () => {
    try {
      setIsImagePicking(true);
      setIsLoading(true);
      let uploadedUrls = '';

      if (image) {
        let fileName = '';

        if (image.filename) {
          fileName = image.filename;
        } else {
          fileName = `${Date.now()}_${Math.floor(Math.random() * 10000)}.jpg`;
          console.log('Generated Filename:', fileName);
        }

        const storageRef = storage().ref().child(`images/${fileName}`);

        const blob = await fetch(image.path).then(res => res.blob());

        console.log('Uploading Image:', fileName);
        await storageRef.put(blob);

        const downloadURL = await storageRef.getDownloadURL();
        console.log('Download URL:', downloadURL);
        uploadedUrls = downloadURL;
      }

      setImageUrls(uploadedUrls);
      setIsImagePicking(false);
      setIsLoading(false);

      setIsSelected(true)

    } catch (error) {
      console.error('Error uploading images:', error);
      Alert("Some Error Occured", "Please try again")
      console.error("Error info: ", error.response)
      setIsImagePicking(false);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setName('');
    setBranch('');
    setEmail('');
    setPhoneNo('');
    setPost('');
    setImageUrls('');
    setImage('');
  }

  const handleSubmit = () => {
    if (name == '' || email == '' || institute == '' || post == '' || imageUrls == '' || phoneNo == '') {
      Alert.alert("Error", "Please fill all details")
    }
    else {
      if (branch == '') {
        const data = {
          name: name,
          email: email,
          phoneNo: phoneNo,
          title: post,
          institute: institute,
          photo: imageUrls
        }
        console.log(data);
        Alert.alert("Success", "Data Added successfully")
      }
      else {
        const data = {
          name: name,
          email: email,
          phoneNo: phoneNo,
          title: post,
          branch: branch,
          photo: imageUrls,
          institute: institute
        }

        console.log(data);
        Alert.alert("Success", "Data Added successfully")
      }
    }
  }

  const handlePostChange = (id, text) => {
    setPost(text);
  }

  return (

    <ScrollView style={styles.main}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          placeholderTextColor="grey"
          keyboardType='ascii-capable'
          value={name}
          onChangeText={(text) => { setName(text) }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          placeholderTextColor="grey"
          keyboardType="phone-pad"
          value={phoneNo}
          onChangeText={(text) => { setPhoneNo(text) }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email ID"
          placeholderTextColor="grey"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => { setEmail(text) }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Branch</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Branch"
          placeholderTextColor="grey"
          value={branch}
          onChangeText={(text) => { setBranch(text) }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Institute</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Institute"
          placeholderTextColor="grey"
          value={institute}
          onChangeText={(text) => { setInstitute(text) }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Choose Role/Post</Text>
        <ModalDropdown
          options={['Teacher', 'Principal', 'H.O.D.']}
          textStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownStyle}
          dropdownTextStyle={styles.dropdownTextStyle}
          onSelect={handlePostChange}
        />
      </View>
      <TouchableOpacity onPress={handleImagePicker} style={styles.button}>
        <Text style={styles.buttonText}>Select Images</Text>
      </TouchableOpacity>
      {
        isSelected && (
          <View style={styles.inputContainer}>
            <Image source={{ uri: imageUrls }}
              style={styles.image} />
          </View>
        )
      }
      {isLoading && (
        <View style={styles.overlay}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#E5E4E2" />
          </View>
        </View>
      )}

      <TouchableOpacity style={[styles.button, { marginTop: isSelected ? 0 : 30 }]} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default AddContact;
