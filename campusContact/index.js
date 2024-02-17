import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Linking, Image, ScrollView } from 'react-native';
import styles from './styles';
import add from './addContact';
import firestore from '@react-native-firebase/firestore';
import { useAppSelector } from '../store/hooks';

const CampusContact = ({ navigation }) => {
  const user = useAppSelector(state => state.profile.data);
  const contacts = [
    {
      "_id": "659957e8ccb8c5d06518c4d0",
      "name": "Sanjay Wankhade",
      "phoneNo": "1234567890",
      "title": "I/C HOD",
      "branch": "CO",
      "institute": "VESP",
      "mail": "sanjay-wankhade@gmail.com",
      "photo": 'https://firebasestorage.googleapis.com/v0/b/vesapp-e6a7d.appspot.com/o/images%2F1704947782594_2519.jpg?alt=media&token=1a6e90b2-31c1-4ca3-9170-903e5da06ddd"',
    },
    {
      "_id": "659959d0ccb8c5d06518c4d1",
      "name": "Vikrant Joshi",
      "phoneNo": "0987654321",
      "title": "Principal",
      "institute": "VESP",
      "mail": "vikrant-joshi@gmail.com",
      "photo": 'https://firebasestorage.googleapis.com/v0/b/vesapp-e6a7d.appspot.com/o/images%2F1704947782594_2519.jpg?alt=media&token=1a6e90b2-31c1-4ca3-9170-903e5da06ddd"',
    }
  ];

  const handleContactPress = (contactInfo) => {
    if (contactInfo.type === 'phone') {
      Linking.openURL(`tel:${contactInfo.value}`);
    } else if (contactInfo.type === 'email') {
      Linking.openURL(`mailto:${contactInfo.value}`);
    }
  };

  const renderContactItem = ({ item }) => (
    <View style={styles.contactContainer}>
      <Image source={{ uri: item.photo }} style={styles.photo} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>Phone: {item.phoneNo}</Text>
      <Text style={styles.details}>Title: {item.title}</Text>
      <Text style={styles.details}>Branch: {item.branch}</Text>
      <Text style={styles.details}>Institute: {item.institute}</Text>
      <TouchableOpacity onPress={() => handleContactPress({ type: 'phone', value: item.phoneNo })}>
        <Text style={[styles.details, { color: '#2ec2ff', textDecorationLine: 'underline' }]}>
          Phone: {item.phoneNo}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleContactPress({ type: 'email', value: item.mail })}>
        <Text style={[styles.details, { color: '#2ec2ff', textDecorationLine: 'underline' }]}>
          Mail: {item.mail}
        </Text>
      </TouchableOpacity>
    </View>
  );

  function click() {
    navigation.navigate('Add Contact');
  }
  return (
    <ScrollView>
      {contacts.map((contact) => renderContactItem({ item: contact }))}
      {
        user.loginType == 'Admin' ?
          <TouchableOpacity style={styles.button1} onPress={click}>
            <Text style={styles.buttonText}>Add Contact</Text>
          </TouchableOpacity>
          :
          null
      }
    </ScrollView>
  );
};

export default CampusContact;