import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './AttendanceNew.styles';
import firestore from '@react-native-firebase/firestore';

const AttendanceNew = ({navigation}) => {
  const [Classroom, setClassroom] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [classDropdownOpen, setClassDropdownOpen] = useState(false);
  const [classStrength, setClassStrength] = useState('');
  const [sessionCount, setSessionCount] = useState('');
  const [absentRollNo, setAbsentRollNo] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Current date in YYYY-MM-DD format

  const classOptions = Array.from({ length: 21 }, (_, index) => ({
    label: `P${index + 1}`,
    value: `P${index + 1}`,
  }));

  const handleSubmit = async () => {
    const attendanceData = {
      classroom: Classroom,
      subject: selectedSubject,
      date: date, // Include current date
      attendance: [], // Initialize an array to hold attendance data for each student
    };

    // Initialize attendance for all students as 'Present'
    for (let i = 1; i <= parseInt(classStrength, 10); i++) {
      attendanceData.attendance.push({ rollNo: i.toString(), status: 'P' });
    }

    // Split the absent roll numbers by comma and remove any leading or trailing whitespace
    const absentRollNumbers = absentRollNo.trim().split(',');

    // Mark the status of absent students as 'Absent'
    absentRollNumbers.forEach(rollNo => {
      const index = parseInt(rollNo.trim(), 10) - 1; // Adjust index since roll numbers start from 1
      if (index >= 0 && index < attendanceData.attendance.length) {
        attendanceData.attendance[index].status = 'A';
      }
    });

    try {
      // Add the attendance data to the Firestore database
      await firestore().collection('Attendance').add(attendanceData);
      Alert.alert('Success', 'Attendance data added successfully');
    } catch (error) {
      console.error('Error adding attendance data: ', error);
      Alert.alert('Error', 'Failed to add attendance data');
    }
  };

  const handleClassroom = itemValue => {
    setClassroom(itemValue);
  };

  return (
    <View style={styles.innerContainer}>
      <Text style={styles.label}>Class Name</Text>
      <DropDownPicker
        style={styles.picker}
        textStyle={{ color: 'black' }}
        open={classDropdownOpen}
        value={Classroom}
        items={classOptions}
        placeholder="Select Class Name"
        setOpen={setClassDropdownOpen}
        onSelectItem={item => handleClassroom(item.value)}
        containerStyle={styles.dropdownContainer}
        scrollable={true}
      />
      <Text style={styles.label}>Subject</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Subject"
        value={selectedSubject}
        onChangeText={setSelectedSubject}
      />
      <View style={styles.row}>
        <Text style={styles.label}>Enter lecture number: </Text>
        <TextInput
          style={styles.input}
          placeholder="Lecture Number"
          value={sessionCount}
          onChangeText={text => setSessionCount(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Enter strength of class: </Text>
        <TextInput
          style={styles.input}
          placeholder="Total Students"
          value={classStrength}
          onChangeText={text => setClassStrength(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Enter absent rollno. : </Text>
        <TextInput
          style={styles.input}
          placeholder="Absent Roll Number"
          value={absentRollNo}
          onChangeText={text => setAbsentRollNo(text)}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.buttonG} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Attendance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonG} onPress={()=>{navigation.navigate('ViewAttend')}}>
        <Text style={styles.buttonText}>View Attendance</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AttendanceNew;
