import React, { useState } from 'react';
import { View, Alert, Text, ScrollView, TextInput, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import styles from './Venue.styles';

const Venue = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [institute, setInstitute] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [isImagePicking, setIsImagePicking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]); 


  const handleImagePicker = async () => {
    try {
      const selectedImages = await ImagePicker.openPicker({
        multiple: true,
        mediaType: 'photo',
        minFiles: 2,
        maxFiles: 6,
      });


      console.log('Selected images:', selectedImages);
      setImages(selectedImages);
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
      const uploadedUrls = [];

      for (const image of images) {
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
        uploadedUrls.push(downloadURL);
      }

      setImageUrls([...imageUrls, ...uploadedUrls]);
      setIsImagePicking(false);
      setIsLoading(false);
  
        Alert.alert("Images uploaded successfully!");
      
    } catch (error) {
      console.error('Error uploading images:', error);
      setIsImagePicking(false);
    }finally{
      setIsLoading(false);
    }
  };

  const handleLocationClick = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    Linking.openURL(mapsUrl);
  };

  const handleSubmit = async () => {
    try {
      const venueData = {
        bookings: [],
        desc: description,
        images: imageUrls,
        institute: institute,
        location: location,
        name: name,
      };

      if (selectedImages.length === 0) {
        Alert.alert('Please select at least one image before submitting.');
        return;
      }

      await firestore().collection('Booking').add(venueData);
      Alert.alert(
        'Success!',
        'Venue data uploaded successfully!',
        [
          {
            text: 'OK',
          }, {
            // text: 'Next',
            // onPress: () => navigation.navigate('Booking'),
            //uncomment this line when it is useful
          }
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error uploading venue data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput
          value={institute}
          onChangeText={(text) => setInstitute(text)}
          placeholder="Institute"
          style={styles.input}
        />
        <TextInput
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Description"
          style={[styles.input, styles.multilineInput]}
          multiline
          numberOfLines={4}
          textAlignVertical='top'
        />
        <TextInput
          value={location}
          onChangeText={(text) => setLocation(text)}
          placeholder="Location"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleLocationClick} style={styles.button}>
          <Text style={styles.buttonText}>Open in Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleImagePicker} style={styles.button}>
          <Text style={styles.buttonText}>Select Images</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
      {isLoading && (
        <View style={styles.overlay}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#E5E4E2" />
          </View>
        </View>
      )}
    </View>
  );
};


export default Venue;
