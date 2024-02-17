import React from "react";
import { Image, View, Text, StyleSheet, ImageBackground, TouchableOpacity, } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { useAppSelector } from "./store/hooks";;
import { white } from "./utils/color";;

const WelcomeUser = ({ navigation }) => {
    const user = useAppSelector(state => state.profile.data);

    return (
        <View>
            <ImageBackground source={require('./assets/imgs/welcome_user.jpg')} style={{ flex: 1, height: responsiveHeight(100), width: responsiveWidth(100), alignItems: 'center' }}>
                <View style={{ height: responsiveHeight(10), width: responsiveWidth(100), alignItems: 'center', justifyContent: 'center', marginTop: responsiveHeight(10) }}>
                    <Text style={{ color: 'white', fontSize: 60 }}>Hello!</Text>
                    <View style={{ backgroundColor: '#932727', height: responsiveHeight(5), width: responsiveWidth(50), alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 8, borderColor: white, marginTop: responsiveHeight(2) }}>
                        <Text style={{ color: 'white' }}>LOGGED IN AS {user.loginType}</Text>
                    </View>
                </View>
                <View style={{ height: responsiveHeight(20), width: responsiveWidth(100), marginTop: responsiveHeight(38), alignItems: 'center' }}>
                    <Text style={{ color: '#A82C2C', fontSize: 30 }}>{user.firstName} {user.lastName}</Text>
                    <Text style={{ fontSize: 30 }}>{user.grNo}</Text>
                </View>
                {/* <View style={{ borderWidth: 5 }}> */}
                <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={{ backgroundColor: '#932727', height: responsiveHeight(8), width: responsiveWidth(50), alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 8, borderColor: white, marginTop: responsiveHeight(2), elevation: 5 }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>GET STARTED</Text>
                </TouchableOpacity>
                {/* </View> */}
            </ImageBackground>
        </View>
    )
}
export default WelcomeUser;
