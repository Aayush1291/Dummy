import { StyleSheet, Dimensions } from "react-native";
import { elevationsize } from "../utils/constant";
import { black, blue, shadowcolor, titletext, white } from "../utils/color";

const windowWidth = Dimensions.get('window').width

const Style = StyleSheet.create({
    image: {
        width: '100%',
        height: 130,
        resizeMode: 'cover',
    },
    heading1: {
        paddingTop: 20,
        fontSize: 25,
        alignSelf: 'center',
        color: black
    },
    main: {
        flexDirection: 'row',
    },
    im: {
        flex:1,
        width: windowWidth / 2 -5,
        height: 200,
        margin: 4,
        resizeMode: 'contain',
    },
    coursetext: {
        margin: 4,
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
        flex: 1,
        color: black,
        textAlign: 'center'
    },
    view: {
        alignSelf: 'center',
        padding: 10,
        margin: 20,
        elevation: elevationsize,
        shadowColor: shadowcolor,
        backgroundColor: white,
        width: windowWidth - 30
    },
    im2: {
        width: windowWidth - 50,
        height: 300,
    },
    heading2: {
        fontSize: 30,
        alignSelf: 'center',
        color: titletext
    },
    button: {
        backgroundColor: white,
        elevation: elevationsize,
        shadowColor: shadowcolor,
        alignSelf: 'center',
    },
    button2: {
        backgroundColor: white,
        elevation: elevationsize,
        shadowColor: shadowcolor,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical:20,
        flexDirection: 'row',
    },
    icon: {
        fontSize: 25,
        fontWeight: 'bold',
        color: titletext,
    },
    textb: {
        flex:1,
        fontSize: 25,
        color: titletext,
        margin: 5
    },
    link: {
        color: blue,
        fontSize: 25,
    },
    link2: {
        color: blue,
    },
    sub_module_view: {
        flex: 1,
        backgroundColor: white,
        margin: 10,
        // padding: 5,
    },
    sub_text: {
        fontSize: 18,
        color: black,
        padding: 10
    }

})
export default Style