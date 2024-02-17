import React from "react";
import { Image, Text, TouchableOpacity, View, Linking, ScrollView } from "react-native";
import Style from "./DigitalAcademy.style";

const DigitalAcademy = ({ navigation }) => {
    return (
        <ScrollView >

            <TouchableOpacity
                onPress={() => Linking.openURL('https://forms.eduqfix.com/vesform/add')}>
                <Image source={require('../assets/imgs/enroll.png')}
                    style={Style.image} />
            </TouchableOpacity>

            <Text style={Style.heading1}>ABOUT OUR COURSES</Text>

            <View style={Style.main}>
                <Image source={require('../assets/imgs/agile.png')}
                    style={Style.im} />
                <Image source={require('../assets/imgs/photoshop.png')}
                    style={Style.im} />
            </View>

            <View style={Style.main}>
                <Text style={Style.coursetext}>FREE COURSE ON AGILE </Text>
                <Text style={Style.coursetext}>FREE COURSE ON PHOTOSHOP</Text>
            </View>

            <View style={Style.view}>
                <Image source={require('../assets/imgs/digitalmarketing.png')}
                    style={Style.im2} />
                <Text style={Style.heading1}>DIGITAL MARKETING</Text>
                <TouchableOpacity
                    style={Style.button}
                    onPress={() => navigation.navigate('DigitalAcademyDetail', {itemTitle:'Marketing'})}>
                    <Text style={Style.heading2}>KNOW MORE</Text>
                </TouchableOpacity>
            </View>

            <View style={Style.view}>
                <Image source={require('../assets/imgs/digitaltechnology.png')}
                    style={Style.im2} />
                <Text style={Style.heading1}>DIGITAL & TECHNOLOGY</Text>
                <TouchableOpacity
                    style={Style.button}
                    onPress={() => navigation.navigate('DigitalAcademyDetail', {itemTitle:'Technology',})}>
                    <Text style={Style.heading2}>KNOW MORE</Text>
                </TouchableOpacity>
            </View>

            <View style={Style.view}>
                <Image source={require('../assets/imgs/skill.png')}
                    style={Style.im2} />
                <Text style={Style.heading1}>SKILL DEVELOPMENT</Text>
                <TouchableOpacity
                    style={Style.button}
                    onPress={() => navigation.navigate('DigitalAcademyDetail', {itemTitle:'Skill'})}>
                    <Text style={Style.heading2}>KNOW MORE</Text>
                </TouchableOpacity>

            </View>
            <View style={Style.view}>
                <Image source={require('../assets/imgs/pharmacy.png')}
                    style={Style.im2} />
                <Text style={Style.heading1}>PHARMACY & SCIENCE</Text>
                <TouchableOpacity
                    style={Style.button}
                    onPress={() => navigation.navigate('DigitalAcademyDetail', {itemTitle:'Pharmacy'})}>
                    <Text style={Style.heading2}>KNOW MORE</Text>
                </TouchableOpacity>
            </View>

            <View style={Style.view}>
                <Image source={require('../assets/imgs/management.png')}
                    style={Style.im2} />
                <Text style={Style.heading1}>MANAGEMENT</Text>
                <TouchableOpacity
                    style={Style.button}
                    onPress={() => navigation.navigate('DigitalAcademyDetail', {itemTitle:'Management'})}>
                    <Text style={Style.heading2}>KNOW MORE</Text>
                </TouchableOpacity>
            </View>

        </ScrollView >
    )
}

export default DigitalAcademy