import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { styles } from './fees.styles';
import { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';;

const Fees = () => {
    const user = useAppSelector(state => state.profile.data);
    const [studentData, setStudentData] = useState(null);
    const email = user.email;
    const [feereamin, setFeeReamin] = useState(null);

    useEffect(() => {
        showFee();
    }, []);

    const showFee = async () => {
        try {
            const parentQuery = await firestore()
                .collection('users')
                .where('email', '==', email)
                .get();
            const parent = parentQuery.docs[0].data().child;
            const studentQuery = await firestore()
                .collection('Users')
                .where('email', '==', parent)
                .get();
            const student = studentQuery.docs[0].data();
            setStudentData(student);
            setFeeReamin(72000 - student.fees);
        } catch (error) {
            console.error('Error retrieving student data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.label}>Name: {studentData?.firstName + " " + studentData?.lastName}</Text>
            </View>
            <Text></Text>
            <View style={styles.card}>
                <Text style={styles.label}>Fee Paid: ₹ {studentData?.fees}</Text>
            </View>
            <Text></Text>
            <View style={styles.card}>
                <Text style={styles.label}>Fees Remaining: ₹ {feereamin}</Text>
            </View>
            <Text></Text>
            <View style={styles.card}>
                <Text style={styles.label}>Total anual fees: ₹ 72000</Text>
            </View>
        </View>
    );
};

export default Fees;