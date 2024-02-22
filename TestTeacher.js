import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const SPREADSHEET_ID = '14Rg08Z9vtHTUio2IYPDPswkgk8MjjXQlEss5U0WtUqU';
const API_KEY = 'AIzaSyD5Sn-pnmDXOWkE78IGu3QMbVikjPVHXYc';

const TestTeacher = () => {
  const [attendanceData, setAttendanceData] = useState([]);

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
        setAttendanceData(data.values.slice(1));
      } else {
        console.error('No values found in the response data');
      }
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.heading}>Student Marks Tracker</Text>
        <ScrollView horizontal>
          <View>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
              <Row
                data={['Name', 'Enrollment No', 'Sem', 'MAD', 'JPR', 'CSS']}
                style={styles.head}
                textStyle={styles.text}
                widthArr={[100, 120, 80, 60, 60, 60]}
              />
              {attendanceData.map((rowData, index) => (
                <Row
                  key={index}
                  data={[rowData[5], rowData[1], rowData[6], rowData[2], rowData[4], rowData[3]]}
                  style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                  textStyle={styles.text}
                  widthArr={[100, 120, 80, 60, 60, 60]}
                />
              ))}
            </Table>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, textAlign: 'center' },
  row: { height: 40, flexDirection: 'row' }
});

export default TestTeacher;
