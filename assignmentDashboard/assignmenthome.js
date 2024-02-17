import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView , Linking} from 'react-native';
import styles from './assignmenthome.styles';
import firestore from '@react-native-firebase/firestore';
import { useAppSelector } from '../store/hooks';

const AssignmentHomeScreen = () => {
  const [assignments, setAssignments] = useState([]);
  const user = useAppSelector(state => state.profile.data);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try { 
      const formattedToday = new Date().toISOString(); 
      console.log('Date===>',formattedToday)
      const snapshot = await firestore().collection('Assignments').where('postedBy', '==', user.email).get();
      const assignmentList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAssignments(assignmentList);
      console.log("Assignments==>", assignmentList);
    } catch (error) {
      console.error('Error fetching assignments:', error);
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
      {item.link && <Text style={[styles.text,styles.linktext]} onPress={()=>openLink(item.link)}>Link: {item.link}</Text>}
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

export default AssignmentHomeScreen;
