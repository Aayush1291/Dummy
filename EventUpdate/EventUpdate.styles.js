import { StyleSheet } from "react-native";
import { shadowcolor,white,titletext,black } from "../utils/color";
import { elevationsize } from "../utils/constant";;

const Style = StyleSheet.create({
    renderView: {
        padding: 10,
        margin: 20,
        elevation: elevationsize,
        shadowColor: shadowcolor,
        flex: 1,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'visible',
        backgroundColor: white,
    },
    titleText: {
        fontSize: 40,
        color: titletext,
        borderBottomWidth: 2
    },
    descView: {
        padding: 10,
    },
    descText: {
        fontSize: 20,
        color: black
    },
    mainView: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode:'contain',
        alignSelf: 'center',
        borderColor: white,
        margin: 10
    },
    button: {
        backgroundColor: titletext,
        elevation: elevationsize,
        shadowColor: shadowcolor,
        alignSelf: 'center'
    },
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: white,
        padding: 5
    },
    textInput: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 10
    },
    date: {
        textAlign: 'right'
    },
})

export default Style;