import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Style from "./EventUpdate.styles";
import { useAppSelector } from "../store/hooks";

const EventUpdate = ({ navigation }) => {
    const [mydata, setmydata] = useState([])
    const [isVisible, setIsVisible] = useState(false);
    const user = useAppSelector(state => state.profile.data);
    useEffect(() => {
        getDatabase()
    }, [])

    const getDatabase = async () => {
        try {
            const querySnapshot = await firestore().collection('EventUpdate').get();
            const data = querySnapshot.docs.map(doc => doc.data());
            setmydata(data);
        } catch (error) {
            console.log('Error getting data:', error);
        }
        checkUser()
    }

    const checkUser = () => {
        if (user.loginType == 'teacher') {
            setIsVisible(true)
        }
    }
    const renderItems = ({ item }) => {
        const firestoreTimestamp = item.Eventdate;
        const firestoreDate = firestoreTimestamp && firestoreTimestamp.toDate ? firestoreTimestamp.toDate() : null;
        const currentDate = new Date();
        const formatted = firestoreDate
        if (firestoreDate && firestoreDate.getTime() > currentDate.getTime()||item.Eventdate>currentDate.getTime()) {
            return (
                <View>
                    <View style={Style.renderView}>
                        <Text style={Style.titleText}> {item.Title} </Text>    
                    <Image source={{ uri: item.Image }}
                            style={Style.image} />
                        <View style={Style.descView}>
                            <Text style={Style.descText}> {item.Desc} </Text>
                            <Text style={Style.date}>{formatted}</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Detail', { itemTitle: item.Title })}>
                                <Text>Detail</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            )
        }
        return null;
    }

    return (
        <View style={Style.mainView}>
            <FlatList
                data={mydata}
                renderItem={renderItems}
                keyExtractor={(item) => item.id}
            />
            {isVisible && (
                <TouchableOpacity
                    style={Style.button}
                    onPress={() => navigation.navigate('AddEvent')}>
                    <Text style={Style.text}>Add Event</Text>
                </TouchableOpacity>
            )
            }
             <Text></Text>
            <TouchableOpacity
                    style={Style.button}
                    onPress={() => navigation.navigate('CompletedEvent')}>
                    <Text style={Style.text}>Completed Events</Text>
                </TouchableOpacity>

        </View>

    )
}
export default EventUpdate
