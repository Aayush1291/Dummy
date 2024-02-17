import React from 'react';
import { View, Text, Linking, Image, TouchableOpacity } from 'react-native';
import styles from './ContactUs.styles';

const ContactUsScreen = () => {
    const emailAddress = 'ves@ves.ac.in';
    const phoneNo = '+022-25227460';
    const address = "Sindhi Society, Chembur, Mumbai - 400071";
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    const handleEmailPress = () => {
        Linking.openURL(`mailto:${emailAddress}`);
    };

    const handlePhone = () => {
        Linking.openURL(`tel:${phoneNo}`);
    };

    const handleAddress = () => {
        Linking.openURL(mapUrl);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>CONNECT WITH</Text>
            <Text style={styles.title}>VIVEKANAND EDUCATION SOCIETY</Text>

            <View style={styles.card}>
                <Image style={styles.image}
                    source={{ uri: 'https://i0.wp.com/ves.ac.in/wp-content/uploads/2022/01/con1.jpg?fit=46%2C43&ssl=1' }}
                    resizeMode="cover"
                />
                <TouchableOpacity
                    onPress={handleAddress}
                >
                    <Text style={styles.text}>{address}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <Image style={styles.image}
                    source={{ uri: 'https://i0.wp.com/ves.ac.in/wp-content/uploads/2022/01/con2.jpg?fit=46%2C43&ssl=1' }}
                    resizeMode="cover"
                />
                <TouchableOpacity
                    onPress={handlePhone}
                >
                    <Text style={styles.text}>{phoneNo}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <Image style={styles.image}
                    source={{ uri: 'https://i0.wp.com/ves.ac.in/wp-content/uploads/2022/01/con3.jpg?fit=46%2C43&ssl=1' }}
                    resizeMode="cover"
                />
                <TouchableOpacity
                    onPress={handleEmailPress}
                >
                    <Text style={styles.text}>{emailAddress}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ContactUsScreen;

