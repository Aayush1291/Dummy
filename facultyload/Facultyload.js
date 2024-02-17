import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import firestore from '@react-native-firebase/firestore';
import styles from './Facultyload.style';

const Facultyload = () => {
  const user = useAppSelector(state => state.profile.data);
  const [facultyloadData, setFacultyloadData] = useState([]);

  useEffect(() => {
    const fetchFacultyloadData = async () => {
      try {
        const querySnapshot = await firestore()
          .collection('FacltyLoad')
          .where('teacherName', '==', user.name)
          .get();

        const data = [];
        querySnapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setFacultyloadData(data);
      } catch (error) {
        console.log('Error fetching faculty load data:', error);
      }
    };

    fetchFacultyloadData();
  }, []);

  const renderFacultyload = () => {
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday'];

    if (facultyloadData.length === 0) {
      return null; 
    }

    return (
      <ScrollView>
        {daysOfWeek.map((day, index) => {
          const dayData = facultyloadData[0][day] || [];

          return (
            <View key={day}>
              <Text style={styles.dayHeading}>{day.charAt(0).toUpperCase() + day.slice(1)}</Text>
              <Table borderStyle={styles.tableBorderStyle}>
                <Row
                  data={[ 'Class','Subject', 'Timing']}
                  style={styles.tableHeader}
                  textStyle={styles.headerText}
                />
                {dayData.map((item, i) => (
                  <Row
                    key={`${day}-${i}`}
                    data={[
                      <Text style={[styles.cellText, styles.classText]}>{item.class || ''}</Text>,
                      <Text style={[styles.cellText, styles.subjectText]}>{item.subject || ''}</Text>,
                      <Text style={[styles.cellText, styles.timingText]}>{item.timing || ''}</Text>,
                    ]}
                    style={[
                      styles.tableRow,
                      i === 0 ? styles.dayRow : styles.defaultRow,
                    ]}
                    textStyle={styles.cellText}
                  />
                ))}
              </Table>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.teacherName}>
        Teacher Name: {user.name}
      </Text>

      <Text style={styles.heading}>Timetable:</Text>
      {renderFacultyload()}
    </View>
  );
};

export default Facultyload;
