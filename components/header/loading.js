import React from "react";
import { ActivityIndicator, Dimensions, Text, View } from "react-native";
import style from "./loading.styles";

const Loading = () => {
    return (
        <View style={style.outerView}>           
         <Text style={style.Text}>Please wait while Loading !!</Text>
            <View>
                <ActivityIndicator size="large" color='rgb(145, 41, 40)' />
                <Text>Loading...</Text>
            </View>
        </View>
    )
}
export default Loading