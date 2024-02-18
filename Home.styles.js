import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import { white, maroon, shadowcolor, black, gray } from './utils/color';
import { responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";


const windowWidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

const styles = StyleSheet.create({

    view: {
        flex: 1,
    },

    image: {
        width: "100%",
        height: 280,
        resizeMode: 'contain',
    },
    contentContainer: {
        height: windowheight + responsiveHeight(40),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        borderRadius: 10
    },
    heading: {
        flexDirection: 'row',
        height: responsiveHeight(10),
        width: responsiveWidth(100),

    },
    greeting: {
        fontSize: 17,
        color: black,
    },
    mail: {
        fontSize: 12,
        color: gray,
    },


    card1: {
        width: windowWidth / 2 - 20,
        height: 50,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        shadowColor: shadowcolor,
        backgroundColor: white,
        elevation: 15,
        borderRadius:15
    },

    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: maroon,
    },

    welcome: {
        backgroundColor: maroon,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },

    welcome_text: {
        fontWeight: 'bold',
        color: white,
        fontSize: 25,
    },
});

export default styles;