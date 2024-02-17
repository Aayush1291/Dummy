import { StyleSheet } from "react-native";
import { maroon, shadowcolor } from "../../utils/color";

const styles = StyleSheet.create({

    Homecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 25,
        shadowColor: '#',
        overflow: 'hidden',
        height: 45,
        paddingHorizontal: 10,
    },

    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15,
        shadowColor: 'rgb(145,41,40)',
        overflow: 'hidden',
        height: 55,
    },

    icon: {
        position: 'absolute',
        right: 20,
    },
    chaticon: {
        position: 'absolute',
        right: 60,
    },

    tabIcon: {
        position: 'absolute',
        left: 10
    },

    logintext: {
        color: shadowcolor,
        fontSize: 14,
        fontWeight: '900',
        fontStyle: 'italic'
    },


    TabTitle: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 10,
        position: 'absolute',
        alignContent: 'center'
    },
});

export default styles;