import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import { useAppSelector } from '../store/hooks';
import firestore from '@react-native-firebase/firestore';
import styles from './DailyAttendance.styles';

const DailyAttendance = ({ navigation }) => {
    const user = useAppSelector(state => state.profile.data);
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [open, setOpen] = useState(false);
    const [openSession, setOpenSession] = useState(false);
    const [students, setStudents] = useState([]);
    const [attendance, setAttednance] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [sessionCount, setSessionCount] = useState();
    const [sessions, setSessions] = useState([
        {
            label: 1,
            value: 1
        },
        {
            label: 2,
            value: 2
        },
        {
            label: 3,
            value: 3
        },
        {
            label: 4,
            value: 4
        },
    ])

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);

    };

    const fetchSubjects = () => {
        const sub = user.subjects;

        const subjectData = sub.map((doc) => ({
            label: doc.subjectName,
            value: doc.subjectName,
        }));

        setSubjects(subjectData);

    }

    useEffect(() => {
        setCurrentIndex(0);
        fetchSubjects();
        getStudents();
    }, [])

    const getStudents = async () => {
        try {
            const snapshot = await firestore()
                .collection('Users')
                .where('loginType', '==', 'Student')
                .get();

            const studentsList = snapshot.docs.map((doc) => ({
                name: doc.data().firstName + ' ' + doc.data().lastName,
                ...doc.data()
            }));
            setStudents(studentsList)
        } catch (error) {

        }
    }

    const handleClick = (text) => () => {
        if (selectedSubject !== null) {
            const data = {
                studentName: students[currentIndex].name,
                studentId: students[currentIndex].grNo,
                status: text
            };

            if (attendance.length === currentIndex) {
                const updatedAttendance = [...attendance];
                updatedAttendance.push(data);
                setAttednance(updatedAttendance);
            }

            handleNext();
        } else {
            Alert.alert("Error", "Please select a subject");
        }
    };

    const handleSubmit = () => {
        const dailyAttendance = {
            facultyId: user.email,
            facultyName: user.firstName + ' ' + user.lastName,
            date: new Date(),
            sessionCount: sessionCount,
            attendance: attendance,
            subject: selectedSubject
        }
        console.log(dailyAttendance)
        firestore()
            .collection("Attendance")
            .add(dailyAttendance)
            .then(() => {
                Alert.alert("Success", "Attendance Added Successfully")
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, {user.firstName}!</Text>

            <View style={styles.row}>
                <Text style={styles.label}>Select a subject: </Text>
                <DropDown
                    style={styles.picker}
                    textStyle={{ color: 'black' }}
                    placeholder='Subjects'
                    dropDownDirection="TOP"
                    open={open}
                    value={selectedSubject}
                    items={subjects}
                    setOpen={setOpen}
                    setValue={setSelectedSubject}
                    setItems={setSubjects}
                    containerStyle={styles.dropDownContainer}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Select lecture number: </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.heading1}>{currentIndex < students.length ? `Student ${currentIndex + 1}` : 'List Over'}</Text>
                <Text style={styles.heading}>{currentIndex < students.length ? students[currentIndex].name : null}</Text>
                {
                    currentIndex < students.length ?
                        <View style={{ flexDirection: 'row', marginTop: 40 }}>
                            <TouchableOpacity
                                style={styles.buttonP}
                                onPress={handleClick('Present')}
                                disabled={currentIndex === students.length || attendance.length > currentIndex}
                            >
                                <Text style={styles.buttonText}>Present</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonA}
                                onPress={handleClick('Absent')}
                                disabled={currentIndex === students.length || attendance.length > currentIndex}
                            >
                                <Text style={styles.buttonText}>Absent</Text>
                            </TouchableOpacity>
                        </View>

                        :
                        <TouchableOpacity
                            style={styles.buttonG}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Submit Attendance</Text>
                        </TouchableOpacity>
                }
            </View>
        </View>
    )
}


export default DailyAttendance;