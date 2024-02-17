import { StyleSheet } from "react-native";
import * as COLORS from "../utils/color";
import { responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 15,
        color: COLORS.black,
        marginTop: 10,
        marginLeft: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
        marginTop: 10,
        color: COLORS.titletext,
    },
    label1: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
        marginTop: 10,
        color: COLORS.titletext,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: COLORS.blue,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    header: {
        backgroundColor: COLORS.maroon,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 20,
        width: responsiveWidth(80),
        alignSelf: 'center'
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.white
    },
    headerText1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.white
    },
    childAttendanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        width: responsiveWidth(80),
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: COLORS.black,
        paddingHorizontal: 10
    },
    childName: {
        fontSize: 14,
        color: COLORS.black
    },
    childStatus: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.black
    },
});

export default styles;