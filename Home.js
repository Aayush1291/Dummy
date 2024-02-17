import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    SectionList,
    Alert,
    ImageBackground,
    TouchableOpacity,
    Image,
    StyleSheet,
    Touchable,
    ScrollView
} from 'react-native';
import { useAppSelector } from './store/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Home.styles';
import { red, white, maroon, gray, cyan } from './utils/color';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import firestore from '@react-native-firebase/firestore';

const Card = ({ title }) => {
    return (
        <View style={styles.outercard}>
            <View style={styles.card1}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

const Home = ({ navigation }) => {
    const user = useAppSelector(state => state.profile.data);
    const data = useAppSelector(state => state.profile.modules);
    const [eventName, setEventName] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventDetail, setEventDetail] = useState('');

    useEffect(() => {
        getEvent();
        console.log("logged in")
    }, []);

    const renderCard = ({ item }) => {
        const navigateToScreen = () => {
            switch (item.title) {
                case 'Attendance':
                    if (user.loginType === 'teacher') {
                        navigation.navigate('AttendanceNew');
                    } {/*else if (user.loginType === 'student') {
                        navigation.navigate('StudentAttendance');
                    }*/}
                    break;
                case 'Events Update':
                    navigation.navigate('EventUpdate');
                    break;
                case 'About Us':
                    navigation.navigate('AboutUs');
                    break;
                case 'Faculty Load':
                    navigation.navigate('Facultyload');
                    break;
                case 'Alumni and Mentorship':
                    navigation.navigate('Alumni');
                    break;
                case 'Fees':
                    navigation.navigate('Fees');
                    break;
                case 'Holiday Calender':
                    navigation.navigate('Calendar');
                    break;
                case 'FAQs':
                    navigation.navigate('FAQ');
                    break;
                case 'Fitness And Health':
                    navigation.navigate('FitnessAndHealth');
                    break;
                case 'Digital Academy':
                    navigation.navigate('DigitalAcademy');
                    break;
                case 'Photo Gallery':
                    navigation.navigate('PhotoGallery');
                    break;
                case 'Blog':
                    navigation.navigate('Blog');
                    break;
                case 'Chat':
                    navigation.navigate('Chat');
                    break;
                case 'Exam Schedule':
                    navigation.navigate('Exam');
                    break;
                case 'Counselling':
                    navigation.navigate('Counselling');
                    break;
                case 'Campus Contact':
                    navigation.navigate('Campus Contact');
                    break;
                    case 'Notes Dashboard':
          navigation.navigate('Notes Dashboard')
          break;
                case 'Test Scores':
                    if (user.loginType === 'teacher') {
                        navigation.navigate('TestTeacher')
                    } else if (user.loginType === 'student') {
                        navigation.navigate('Test');
                    }
                    else if (user.loginType === 'parent') {
                        navigation.navigate('TestParent');
                    }
                    break;
                //   case 'Assignment Dashboard':
                //     navigation.navigate('Assignment Dashboard')
                //     break;
                default:
                    break;
            }
        };

        return (
            <TouchableOpacity onPress={navigateToScreen}>
                <Card title={item.title} />
            </TouchableOpacity>
        );
    };

    const getEvent = async () => {
        const collectionRef = firestore().collection('EventUpdate');
        const querySnapshot = await collectionRef.orderBy('Date', 'desc').get();
        const fetchedEventDesc = querySnapshot.docs.map(doc => doc.data().Desc);
        const fetchedEventTitle = querySnapshot.docs.map(doc => doc.data().Title);
        const fetchedEventDetail = querySnapshot.docs.map(doc => doc.data().Detail);
        setEventDetail(fetchedEventDetail[0]);
        setEventName(fetchedEventTitle[0]);
        setEventDesc(fetchedEventDesc[0]);
    };

    return (
        <View style={{ backgroundColor: '#F4F4F4' }}>
            <View style={styles.heading}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Profile');
                    }}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: responsiveHeight(1),
                    }}>
                    <Image
                        source={require('./assets/imgs/user_profile.png')}
                        style={{ height: responsiveHeight(7), width: responsiveWidth(14.5) }}
                    />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.greeting}>Hello {user.name},</Text>
                    <Text style={styles.mail}>{user.email}</Text>
                </View>
            </View>
            <View
                style={{
                    height: responsiveHeight(25),
                    margin: responsiveWidth(2),
                    borderRadius: 20,
                    backgroundColor: maroon,
                }}>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: white,
                        height: responsiveHeight(23),
                        borderRadius: 20,
                        margin: 5,
                    }}>
                    <View
                        style={{ margin: responsiveWidth(2), height: responsiveHeight(21) }}>
                        <Text style={{ fontSize: 16, fontWeight: 900, color: white }}>
                            Newsfeed/Upcoming Events
                        </Text>
                        <View style={{ borderWidth: 1, borderColor: white }}></View>
                        <Text></Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('EventUpdate');
                            }}>
                            <Text style={{ color: white, fontSize: 18 }}>{eventName}</Text>
                            <Text
                                style={{
                                    textDecorationLine: 'underline',
                                    color: white,
                                    fontSize: 12,
                                    textAlign: 'justify',
                                }}>
                                {eventDesc}
                            </Text>
                            <Text
                                style={{
                                    textDecorationLine: 'underline',
                                    color: white,
                                    fontSize: 12,
                                    textAlign: 'justify',
                                }}>
                                {eventDetail}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <SectionList
                sections={data}
                renderItem={renderCard}
                keyExtractor={(item, index) => item + index}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    );
};

export default Home;
