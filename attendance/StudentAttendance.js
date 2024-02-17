import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useAppSelector } from '../store/hooks';;
import styles from './ViewAttendance.styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const StudentAttendance = () => {
    const user = useAppSelector((state) => state.profile.data);
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [fetchedAttendance, setFetchedAttendance] = useState([]);

    const fetchData = async (selectedDate) => {
        try {
            const startDate = new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                selectedDate.getDate(),
                0, 0, 0
            );
            const endDate = new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                selectedDate.getDate(),
                23, 59, 59
            );

            const snapshot = await firestore()
                .collection('Attendance')
                .where('date', '>=', startDate)
                .where('date', '<=', endDate)
                .get();

            const data = snapshot.docs.map((doc) => doc.data());
            const filteredAttendance = data.filter((attendance) =>
                attendance.attendance.some((student) =>
                    student.studentId === user.grNo
                )
            );
            const sortedAttendance = filteredAttendance.sort((a, b) => a.sessionCount - b.sessionCount);
            setFetchedAttendance(sortedAttendance);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(date);
    }, []);

    const showDateTimePicker = () => {
        setShowPicker(true);
    };

    const hideDateTimePicker = () => {
        setShowPicker(false);
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        hideDateTimePicker();
        setIsDateSelected(true);
        fetchData(currentDate);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Welcome {user.firstName}!</Text>
            <View style={styles.row}>
                <Text style={styles.label}>Select a date: </Text>
                <TouchableOpacity style={styles.button} onPress={showDateTimePicker}>
                    <Text style={styles.buttonText}>Select a date</Text>
                </TouchableOpacity>
            </View>
            {showPicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}
            {isDateSelected && (
                <View>
                    <Text style={styles.label1}>You selected: {date.toDateString()}</Text>
                    {fetchedAttendance.map((attendance, index) => (
                        <View key={index}>
                            {attendance.attendance.map((studentAttendance, studentIndex) => {
                                if (studentAttendance.studentId === user.grNo) {
                                    return (
                                        <View key={studentIndex} style={styles.attendanceItem}>
                                            <View style={styles.header}>
                                                <Text style={styles.headerText1}>Lecture No: {attendance.sessionCount}</Text>
                                                <Text style={styles.headerText}>{attendance.subject}</Text>
                                                <Text style={styles.headerText}>{attendance.facultyName}</Text>
                                                <Text style={styles.headerText}>{studentAttendance.status}</Text>
                                            </View>
                                        </View>
                                    );
                                }
                            })}
                        </View>
                    ))}
                </View>
            )}
        </ScrollView>
    );
};

export default StudentAttendance;
