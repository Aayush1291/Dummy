import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Table, Row, Rows } from 'react-native-table-component';

const ViewAttend = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore().collection('Attendance').get();
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAttendanceData(data);
      } catch (error) {
        console.error('Error fetching attendance data: ', error);
      }
    };

    fetchData();
  }, []);

  const renderAttendanceTable = () => {
    // Prepare data for rendering in the table
    const tableHeaders = ['Roll No.', 'Attendance'];
    const tableData = [];
  
    // Extract attendance data for each date
    attendanceData.forEach(({ date, attendance }) => {
      attendance.forEach(({ rollNo, status }) => {
        // Push a new row with roll number and attendance status for each date
        tableData.push([rollNo, status]);
      });
    });
  
    return (
      <View>
        <Text>Date: {attendanceData.length > 0 ? attendanceData[0].date : ""}</Text>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
          <Row data={tableHeaders} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }} />
          <Rows data={tableData} textStyle={{ margin: 6 }} />
        </Table>
      </View>
    );
  };
  

  return <View>{renderAttendanceTable()}</View>;
};

export default ViewAttend;
