import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { useAppSelector } from './store/hooks';
import firestore from '@react-native-firebase/firestore';

const SPREADSHEET_ID = '14Rg08Z9vtHTUio2IYPDPswkgk8MjjXQlEss5U0WtUqU';
const API_KEY = 'AIzaSyD5Sn-pnmDXOWkE78IGu3QMbVikjPVHXYc';

const TestParent = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useAppSelector(state => state.profile.data);
  const [wardno, setWardNo] = useState('');

  useEffect(() => {
    fetchChildData();
  }, []);

  useEffect(() => {
    if (wardno !== '') {
      fetchAttendanceData();
    }
  }, [wardno]);

  const fetchChildData = async () => {
    try {
      console.log("ward=>", user.ward);
      const studentQuery = await firestore()
        .collection('users')
        .where('email', '==', user.ward)
        .get();
      if (studentQuery.docs.length > 0) {
        const rollno = studentQuery.docs[0].data().rno;
        setWardNo(rollno);
        console.log("Roll no==>", rollno);
      } else {
        console.error('No student found with the provided email');
        setError('No student found with the provided email');
      }
    } catch (error) {
      console.error('Error retrieving student data:', error);
      setError('Error retrieving student data');
    }
  };

  const fetchAttendanceData = async () => {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet2?key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('Response from Google Sheets API:', data);
      if (data.values) {
        const filteredData = data.values.slice(1).filter(row => row[0] === wardno);
        setAttendanceData(filteredData);
        console.log(filteredData);
        setLoading(false);
      } else {
        console.error('No values found in the response data');
        setError('No values found in the response data');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching attendance data:', error);
      setError('Error fetching attendance data');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Marks Tracker</Text>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
        <Row
          data={['Name', 'Enrollment No', 'sem', 'mad', 'jpr', 'css']}
          style={styles.head}
          textStyle={styles.text}
        />
        {attendanceData.map((rowData, index) => (
          <Row
            key={index}
            data={[rowData[5], rowData[1], rowData[6], rowData[2], rowData[4], rowData[3]]}
            style={styles.row}
            textStyle={styles.text}
          />
        ))}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, textAlign: 'center' },
  row: { height: 40, flexDirection: 'row' },
  loadingContainer: { justifyContent: 'center', alignItems: 'center' },
  errorContainer: { justifyContent: 'center', alignItems: 'center' },
  errorText: { fontSize: 16, color: 'red' },
});

export default TestParent;
