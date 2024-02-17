import React, { useEffect } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from './store/hooks';;
import { setModules,setUserProfile } from './store/slice/profileSlice';;
import styles from './splash.style';
import { parentmodule, guestmodule, studentmodule, teachermodule, TPOmodule, Adminmodule } from './Modules';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { white } from './utils/color';
const Splash = () => {

    const dispatch = useAppDispatch();

    const navigation = useNavigation();

    useEffect(() => {
        checkFirstTime();
    }, []);

    const checkFirstTime = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            const user = JSON.parse(userData);
            dispatch(setUserProfile(user));


            if(userData!=null) {
                if (user.loginType == 'Student') {
                    dispatch(setModules([
                        {
                            id: '1',
                            title: 'Student Components',
                            data: [...studentmodule]
                        },
                        {
                            id: '2',
                            title: 'Basic Components',
                            data: [...guestmodule]
                        }
                    ]));
                }
                else if (user.loginType == 'Teacher') {
                    dispatch(setModules([
                        {
                            id: '1',
                            title: 'Teacher Components',
                            data: [...teachermodule]
                        },
                        {
                            id: '2',
                            title: 'Basic Components',
                            data: [...guestmodule]
                        }
                    ]));
                }
                else if (user.loginType == 'Parent') {
                    dispatch(setModules([
                        {
                            id: '1',
                            title: 'Parent Components',
                            data: [...parentmodule]
                        },
                        {
                            id: '2',
                            title: 'Basic Components',
                            data: [...guestmodule]
                        }
                    ]));
                }
                else if (user.loginType == 'TPO') {
                    dispatch(setModules([
                        {
                            id: '1',
                            title: 'TPO Components',
                            data: [...TPOmodule]
                        },
                    ]));
                }
                else if (user.loginType == 'Admin') {
                    dispatch(setModules([
                        {
                            id: '1',
                            title: 'Admin Components',
                            data: [...Adminmodule],
                        }]))
                }
            }
            setTimeout(() => {
                navigation.navigate("HomeScreen");
            }, 1000);

        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.logoView}>
                <Image
                    source={require('./assets/imgs/VES-Logo.png')}
                    style={styles.logo}
                />
            </View>
            <ImageBackground
                source={require('./assets/imgs/Opacity.jpg')}
                style={styles.background}>
                <View style={styles.textView}>
                    <Text style={styles.info}>
                        Vivekanand Education Society (VES) runs 26
                        institutions in the
                        vicinity of Chembur. The Society's aim is to impart quality education
                        to all including the economically backward classes thereby playing an
                        important role in the progress of our country, vision of Shri Hashu
                        Advaniji, a great social worker.
                    </Text>
                </View>

                <View style={styles.campuseView}>
                    <Text style={{
                        color: '#932727', fontSize: 24, fontWeight: '900', textAlign: 'center'
                    }}> 8 CAMPUSES</Text>
                </View>


                <Image
                    source={require('./assets/imgs/Branches.png')}
                    resizeMode='contain'
                />

                <Text></Text>
            </ImageBackground>
            <View style={{ backgroundColor: '#E5B900', justifyContent: 'center', alignItems: 'center', height: responsiveHeight(6), }}>
                <Text style={{ color: '#932727', fontWeight: '900', fontSize: 18 }}>WHY VES APP?</Text>
            </View>
            <View style={{ backgroundColor: '#932727' }}>
                <Text style={{ height: responsiveHeight(20), color: white, padding: responsiveWidth(4), fontSize: 12, textAlign: 'center', fontWeight: 'bold' }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum
                </Text>
            </View>
        </View >
    );
};

export default Splash;

