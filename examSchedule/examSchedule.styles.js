import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
const windowWidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;
import * as COLORS from '../utils/color'
import * as CONST from '../utils/constant'

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
    },

    button: {
        verticalAlign: 'bottom',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
        width: responsiveWidth(65),
    },
    addButton: {
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    addButtonMain: {
        backgroundColor: COLORS.maroon,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: responsiveWidth(70),
        alignSelf: 'center',
        marginBottom: 10
    },

    addButtonLabel: {
        color: '#FFF',
        fontWeight: 'bold',
    },

    dropdown: {
        width: responsiveWidth(65),
        marginBottom: 30,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    dropdownText: {
        fontSize: 16,
        color: COLORS.gray,
    },
    dropdownStyle: {
        width: responsiveWidth(60),
        borderRadius: 4,
        elevation: 10,
    },

    text: {
        color: COLORS.black,
        marginVertical: 7,
        fontSize: 15
    },

    card: {
        width: responsiveWidth(90),
        backgroundColor: COLORS.white,
        margin: 10,
        shadowColor: CONST.shadowcolor,
        backgroundColor: COLORS.white,
        elevation: 10,
        padding: 10,
        margin: 10,
    },

    cardTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        color: COLORS.black,
    },
    cardInfo: {
        fontSize: 14,
        color: COLORS.gray,
    },
    downloadButton: {
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'flex-start',
        marginBottom: 20,
        width: responsiveWidth(50),
        marginTop: 20
    },
    downloadButtonText: {
        color: COLORS.red,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    line: {
        borderBottomColor: "black",
        borderBottomWidth: 2,
        width: responsiveWidth(85)
    },

});

export default styles;
