import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView , Linking} from 'react-native';
import styles from './Noteshome.style.js';
import firestore from '@react-native-firebase/firestore';
import { useAppSelector } from '../store/hooks';

const NotesHomeScreen = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);
  const user = useAppSelector(state => state.profile.data);
  const fetchAssignments = async () => {
    try {
      if (user.loginType === 'teacher') {
              const snapshot = await firestore().collection('Assignments').where('postedBy', '==', user.email).get();
              const assignmentList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
              setAssignments(assignmentList);
              console.log("Assignments for Teacher==>", assignmentList);
            } else {
              const snapshot = await firestore().collection('Assignments').where('className', '==', user.class).get();
              const assignmentList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
              setAssignments(assignmentList);
              console.log("Assignments for Student==>", assignmentList);
            }
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };
  
  const handleDeleteAssignment = async (item) => {
    try {
      await firestore().collection('Assignments').doc(item.id).delete();
      console.log('Assignment deleted successfully');
      fetchAssignments();
      // Optionally, you can update the state to reflect the changes
    } catch (error) {
      console.error('Error deleting assignment:', error);
    }
  };
  
  const openLink=(link)=>{
    if(link)
    {
      Linking.openURL(link);
    }
  };

  const renderAssignmentItem = ({ item }) => (
<TouchableOpacity style={styles.card} onPress={() => handleAssignmentPress(item)}>
  <Text style={styles.title}>{item.title}</Text>
  <Text style={styles.subtitle}>Class: {item.className}</Text>
  {item.pdf && <Text style={styles.text}>PDF: {item.pdf}</Text>}
  {item.pdflink && <Text style={[styles.text,styles.linktext]} onPress={()=>openLink(item.pdflink)}>Click to download pdf</Text>}
  {user.loginType === 'teacher' && (
    <TouchableOpacity onPress={() => handleDeleteAssignment(item)} style={styles.deleteButton}>
      <Text styles={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  )}
</TouchableOpacity>

  );

  const handleAssignmentPress = (item) => {
    // Handle onPress event for an assignment item
    
    // You can navigate to another screen or perform any other action here
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <Text style={styles.title}>Your Assignments</Text>
      <FlatList
        data={assignments}
        renderItem={renderAssignmentItem}
        keyExtractor={item => item.id}
      />
      </View>
    </View>
  );
};

export default NotesHomeScreen;