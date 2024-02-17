import { StyleSheet } from "react-native";
import { black, blue, green, lightgray, red, shadowcolor, titletext, white } from "../utils/color";
import { elevationsize } from "../utils/constant";
import { responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    row: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: responsiveWidth(60)
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 15,
        color: black
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
        marginTop: 10,
        color: titletext,
    },
    card: {
        width: 300,
        height: 300,
        marginTop: 100,
        alignItems: 'center',
        padding: 20
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 8,
        color: black
    },
    heading1: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 8,
        color: titletext
    },
    buttonP: {
        backgroundColor: green,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 10
    },
    buttonA: {
        backgroundColor: red,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 10
    },
    buttonG: {
        backgroundColor: blue,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 10
    },
    buttonText: {
        color: white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    picker: {
        height: 40,
        backgroundColor: white,
        borderColor: lightgray,
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
        elevation: elevationsize,
        shadowColor: shadowcolor,
        width: responsiveWidth(60)
    },

    dropDownContainer: {
        width: responsiveWidth(60)
    }
});

export default styles;