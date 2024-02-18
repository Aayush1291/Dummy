import React, { useState } from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import styles from './Placement.style';

const AddJob = () => {
  const navigation = useNavigation();

  const [jobTitle, setJobTitle] = useState('');
  const [jobLoc, setJobLoc] = useState('');
  const [jobDuration, setJobDuration] = useState('');
  const [jobExp, setJobExp] = useState('');
  const [jobDes, setJobDes] = useState('');

  const handleAddJob = async () => {
    if (!jobTitle || !jobLoc || !jobDuration || !jobExp || !jobDes) {
      Alert.alert('Error', 'Please fill in all the fields before adding the job.');
      return;
    }

    await firestore().collection('Placement').add({
      Title: jobTitle,
      Location: jobLoc,
      Duration: jobDuration,
      Experience: jobExp,
      Description: jobDes,
    });
    setJobTitle('');
    setJobLoc('');
    setJobDuration('');
    setJobExp('');
    setJobDes('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text1}
        placeholder="Job Title"
        placeholderTextColor="black"
        value={jobTitle}
        onChangeText={text => setJobTitle(text)}
      />
      <TextInput
        style={styles.text1}
        placeholder="Job Location"
        placeholderTextColor="black"
        value={jobLoc}
        onChangeText={text => setJobLoc(text)}
      />
      <TextInput
        style={styles.text1}
        placeholder="Job Duration"
        placeholderTextColor="black"
        value={jobDuration}
        onChangeText={text => setJobDuration(text)}
      />
      <TextInput
        style={styles.text1}
        placeholder="Job Experience"
        placeholderTextColor="black"
        value={jobExp}
        onChangeText={text => setJobExp(text)}
      />
      <TextInput
        style={styles.text1}
        placeholder="Job Description"
        placeholderTextColor="black"
        value={jobDes}
        onChangeText={text => setJobDes(text)}
      />
      <TouchableOpacity style={styles.button1} onPress={handleAddJob}>
        <Text style={styles.buttontext1}>Add Job Placement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddJob;
