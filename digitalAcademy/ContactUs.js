import React from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import Style from './DigitalAcademy.style';
 const ContactUs =()=>{
    return(
        <View>
            <Text style={Style.heading2}>For any queries, contact us at:</Text>
            <Text></Text>
            <Text >Email:</Text>
            <TouchableOpacity
            onPress={()=>Linking.openURL('mailto: vesda@ves.ac.in')}>
                <Text style={Style.link}> vesda@ves.ac.in</Text>
            </TouchableOpacity>
            <Text></Text>
            <Text>Mobile No:</Text>
            <TouchableOpacity
            onPress={()=>Linking.openURL('tel:9004856754')}>
                <Text style={Style.link}>9004856754</Text>
            </TouchableOpacity>
        </View>
    )
 }
 export default ContactUs