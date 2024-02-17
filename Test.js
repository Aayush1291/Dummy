import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { useAppSelector } from './store/hooks';

const SPREADSHEET_ID = '14Rg08Z9vtHTUio2IYPDPswkgk8MjjXQlEss5U0WtUqU';
const API_KEY = 'AIzaSyD5Sn-pnmDXOWkE78IGu3QMbVikjPVHXYc';

const Test = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const user = useAppSelector(state => state.profile.data);

  useEffect(() => {
    fetchAttendanceData();
  }, []);

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
        console.log(user.rno);
        const filteredData = data.values.slice(1).filter(row => row[0] === user.rno);
        setAttendanceData(filteredData);
      } else {
        console.error('No values found in the response data');
      }
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Marks Tracker</Text>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
        <Row
          data={['Name', 'Enrollment No', 'sem','mad','jpr','css']}
          style={styles.head}
          textStyle={styles.text}
        />
        {attendanceData.map((rowData, index) => (
          <Row
            key={index}
            data={[rowData[5], rowData[1], rowData[6],rowData[2],rowData[4],rowData[3]]}
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
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  head: { height: 50, backgroundColor: '#f1f8ff' },
  text: { margin: 6, fontSize:10 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' }
});

export default Test;
