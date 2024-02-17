import React from "react";
import { Text,TouchableOpacity, View ,Linking}from 'react-native'
import Style from "./DigitalAcademy.style";
const Registration=()=>{
    return(
<View>
<TouchableOpacity
        onPress={()=>Linking.openURL('https://forms.eduqfix.com/vesform/add')}
        style={{alignSelf:'center',}}>
        <Text style={Style.heading1}>Register here</Text>
        </TouchableOpacity>
</View>
    )
}
export default Registration