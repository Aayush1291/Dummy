import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { black, white } from './utils/color';


const styles = StyleSheet.create({
    logoView: {
        height: responsiveHeight(22),
        width: responsiveWidth(30),
        alignSelf: 'center',
        justifyContent: 'center'
    },

    logo: {
        height: responsiveHeight(18),
        width: responsiveWidth(20),
        alignSelf: 'center'
    },

    background: {
        flex: 1,
        resizeMode: 'center',
    },

    textView:
    {
        height: responsiveHeight(13),
        paddingHorizontal: responsiveWidth(3),
    },

    info: {
        color: black,
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center'
    },
    campuseView:
    {
        height: responsiveHeight(5)
    },

    // safeview: {

    //     borderWidth: 5
    // },

    // splashview: {
    //     backgroundColor: 'white',
    //     borderWidth: 1
    // },

    // logo: {
    //     resizeMode: 'center',
    //     borderWidth: 2,
    // },
    // loading: {
    //     color: '#C0392B',
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //     alignSelf: 'center',
    // },
    // loadingview: {
    //     backgroundColor: 'white',
    //     paddingBottom: 10,
    // }

});

export default styles;