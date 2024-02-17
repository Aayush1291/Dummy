import { StyleSheet } from "react-native";
import { black, blue, maroon, shadowcolor, white } from "../utils/color";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: 'white',
        shadowColor: shadowcolor,
        width: '100%',
        overflow: 'hidden',
        marginBottom: responsiveHeight(3),
        borderRadius: 10,
        elevation: 5
    },
    location: {
        fontSize: 14,
        color: black,
        paddingHorizontal: responsiveWidth(1)
    },
    bottomView: {
        flexDirection: 'row',
        paddingHorizontal: responsiveWidth(2),
        borderTopWidth: 1
    },
    share: {
        position: 'absolute',
        right: 1,
        paddingHorizontal: responsiveWidth(2),
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: black,
        paddingHorizontal: responsiveWidth(1)
    },

    image: {
        borderColor: '#fff',
        height: responsiveHeight(56),
        width: responsiveWidth(100),
    },
    main: {
        flex: 1,
        padding: 10
    },
    dropdown: {
        width: responsiveWidth(95),
    },
    dropdownText: {
        fontSize: 20,
        color: black,
        borderRadius: 10,
        borderWidth: 1,
        width: responsiveWidth(95),
        height: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(2),
        // alignContent: 'flex-end',
        alignSelf: 'center',
        textAlign: 'left',
        verticalAlign: 'middle'
    },
    dropdownStyle: {
        width: responsiveWidth(95),
        height: responsiveHeight(40),
        borderWidth: 1,
        borderColor: '#912929',
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    dropdownTextStyle: {
        textAlign: 'justify',
        fontWeight: 'bold',
        fontSize: 14,
        color: blue
    },

});

export default styles;