import { StyleSheet } from 'react-native';
import { black, cyan, white } from '../utils/color';
import { cartborderradius } from '../utils/constant';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: "4%",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "5%",
    },
    flatlist: {
        flexGrow: 1,
    },
    button: {
        margin: 5,
    },
    month: {
        fontSize: 24,
        fontWeight: "bold",
        color: black,
    },
    dropdownText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: black,
    },
    dropdownStyle: {
        width: "30%",
        textAlign: "center",
        justifyContent: "center",
    },
    weekdays: {
        flexDirection: "row",
        marginBottom: "2%",
    },
    weekday: {
        flex: 1,
        textAlign: "center",
        backgroundColor: cyan,
        marginHorizontal: 1,
        color: white,
        borderRadius: 5,
        marginVertical: 10,
        elevation: 4
    },
    calendarDays: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    emptyDay: {
        width: "14.28%",
    },
    day: {
        width: "14.28%",
        height: "14.28%",
        aspectRatio: 1,
        textAlign: "center",
        paddingVertical: 8,
        fontSize: 17,
        color: black
    },
    sunday: {
        color: "red",
        fontWeight: 'bold',
    },
    festivalDay: {
        color: white,
        backgroundColor: 'rgb(78, 90, 117 )',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        borderWidth: 6,
        borderColor: white
    },
    festivalList: {
        marginTop: 20,
    },
    festivalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: "5%",
        borderBottomWidth: 4,
        borderColor: 'rgb(13, 134, 176)',
        color: black,
        borderRadius: 2,

    },
    festivalCard: {
        backgroundColor: 'rgb(230, 247, 255)',
        elevation: 5,
        borderRadius: cartborderradius,
        padding: 12,
        marginBottom: 8,
        borderEndColor: 'rgb(0, 170, 255)',
        borderEndWidth: 2,
        margin: 5
    },
    festivalDate: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
        color: black,
    },
    festivalName: {
        fontSize: 14,
        color: black,
    },
});
export default styles;