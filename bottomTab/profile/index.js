import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Modal,
    TextInput,
    Alert,
    StyleSheet,
    ImageBackground
} from "react-native";
import styles from "./Profile.styles";
import { useAppSelector } from "../../store/hooks";
import * as COLORS from '../../utils/color'
import bcrypt from 'react-native-bcrypt'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar } from 'react-native-paper';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import ImageCropPicker from 'react-native-image-crop-picker';

const HorizontalLine = () => {
    return <View style={styles.line} />;
};

const Profile = ({ navigation }) => {
    const user = useAppSelector(state => state.profile.data);
    const [modalVisible, setModalVisible] = useState(false)
    const [curPass, setCurPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [profilePhoto, setProfilePhoto] = useState(null);

    const toggleModalVisible = () => {
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        retrieveProfilePhoto();
      }, []);

    const changePass = () => {
        const hashedPassword = user.password;

        bcrypt.compare(curPass, hashedPassword, async (error, isMatch) => {
            if (isMatch) {
                if (newPass == curPass)
                    Alert.alert("Error", "New password cannot be the same as old password")

                else {
                    if (newPass != confirmPass)
                        Alert.alert("Error", "Passwords do not match")

                    else {
                        const saltRounds = 5;
                        try {
                            const newHashedPassword = await new Promise((resolve, reject) => {
                                bcrypt.hash(newPass, saltRounds, (error, hash) => {
                                    if (error) {
                                        reject(error);
                                    } else {
                                        resolve(hash);
                                    }
                                });
                            });

                            const docRef = await firestore().collection('Users').where('email', '==', user.email).get();
                            docRef.forEach(async doc => {
                                await doc.ref.update({
                                    password: newHashedPassword,
                                });
                            });
                        }

                        catch (error) {
                            console.log(error)
                        }
                    }
                }
            } else {
                Alert.alert("Error", "Invalid Password");
            }
        });
    }

    const handleProfilePhotoSelection = () => {
        ImageCropPicker.openPicker({
            mediaType: 'photo',
            cropping: true,
            cropperCircleOverlay: false,
            cropperCancelText: 'Cancel',
            cropperChooseText: 'Choose',
            cropperToolbarTitle: 'Crop your photo',
        }).then(response => {
            if (!response.didCancel) {
                // Set the selected profile photo URI to the state
                setProfilePhoto(response.path);
                console.log(response.path)
                // Save the selected profile photo URI in AsyncStorage
                saveProfilePhoto(response.path);
            }
        }).catch(error => {
            console.log('ImageCropPicker Error:', error);
        });
    };

    const retrieveProfilePhoto = async () => {
        try {
            const storedProfilePhoto = await AsyncStorage.getItem('ProfilePhoto');
            if (storedProfilePhoto) {
                setProfilePhoto(storedProfilePhoto);
            }
        } catch (error) {
            console.error('Error retrieving profile photo from AsyncStorage:', error);
        }
      };
      
      const saveProfilePhoto = async (uri) => {
        try {
            console.log(uri);
            await AsyncStorage.setItem('ProfilePhoto', uri);
        } catch (error) {
            console.error('Error saving profile photo to AsyncStorage:', error);
        }
      };

    return (
        <ScrollView>
        <View style={styles.main}>
            <View
                style={styles.threeFourth}>
                <View style={styles.container}>
                    <View style={styles.anotherCard}>
                        <TouchableOpacity onPress={handleProfilePhotoSelection}>
                            {profilePhoto ? (
                                <Image
                                    source={{ uri: profilePhoto }}
                                    style={{ width: 150, height: 150, borderRadius: 100, alignSelf: 'center', marginTop: responsiveHeight(5) }}
                                />
                            ) : (
                                <Avatar.Icon
                                    size={100}
                                    icon="account-circle"
                                    style={{ alignSelf: 'center', marginTop: responsiveHeight(15) }}
                                />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.heading}>{user.firstName} {user.lastName}</Text>
                        <Text style={styles.bottomText}>{user.email}</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.heading}>Information</Text>
                        <HorizontalLine />
                        <Text style={styles.bottomText}>Phone No: {user.phoneNo}</Text>
                        {
                            user.loginType == 'Student' ? <Text style={styles.bottomText}>Gr No: {user.grNo}</Text> : null
                        }
                        {
                            user.loginType == 'Parent' ? <Text style={styles.bottomText}>Child Email: {user.child}</Text> : null
                        }
                        <Text style={styles.bottomText}>Logged in as: {user.loginType}</Text>
                        <TouchableOpacity style={styles.button} onPress={toggleModalVisible}>
                            <Text style={styles.buttonText}>Change Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={async () => {
                            navigation.replace('Login');
                            await AsyncStorage.clear();
                        }}>
                            <Text style={styles.buttonText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    toggleModalVisible();
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Enter your current password:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Current Password"
                            value={curPass}
                            onChangeText={setCurPass}
                            placeholderTextColor={COLORS.gray}
                            color={COLORS.black}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Enter your new password:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="New Password"
                            value={newPass}
                            onChangeText={setNewPass}
                            placeholderTextColor={COLORS.gray}
                            color={COLORS.black}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Re-Enter your new password:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Re-Enter New Password"
                            value={confirmPass}
                            onChangeText={setConfirmPass}
                            placeholderTextColor={COLORS.gray}
                            color={COLORS.black}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={changePass}>
                        <Text style={styles.buttonText}>Change Password</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
        </View>
        </ScrollView>
    )
}

export default Profile;