import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Linking,
    ScrollView
} from "react-native";
import firestore from '@react-native-firebase/firestore';
import styles from "./Notifications.style";

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    const getData = async () => {
        try {
            const querySnanpshot = await firestore()
                .collection('Notification')
                .get()

            const data = querySnanpshot.docs.map((doc) => doc.data());
            data.sort((a, b) => b.date.toDate() - a.date.toDate())
            setNotifications(data);
        } catch (error) {
            console.log(error);
        }
    }

    const renderCard = ({ item }) => {
        const date = item.date.toDate()
        const formatted = date.toLocaleDateString()
        return (
            // <ScrollView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.heading}>{item.title} </Text>
                    <Text style={styles.desc}>{item.desc} </Text>
                    {
                        item.link ?
                            <TouchableOpacity
                                onPress={() => Linking.openURL(item.link)}
                            >
                                <Text style={styles.link}>{item.link} </Text>
                            </TouchableOpacity>
                            : null
                    }
                    <Text style={styles.date}>{formatted}</Text>
                </View>
            </View>
            // </ScrollView>
        )
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <View>
            <FlatList
                data={notifications}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Notifications;