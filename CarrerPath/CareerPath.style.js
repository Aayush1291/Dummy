import { Dimensions, StyleSheet } from "react-native";
import { maroon, white } from "../../utils/color";

const windowheight = Dimensions.get('window').height

const Style = StyleSheet.create({
    text1: {
        color: maroon,
        margin: 15,
        fontSize: 20
    },
    button: {
        backgroundColor: maroon,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 10,
        width: "50%"
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
        color: white,
        padding: 5,
    },
    inputtxt: {
        borderWidth: 2,
        borderColor: 'maroon',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginHorizontal: 15
    },
    view: {
        height: windowheight / 2,
    },
    cart: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 5,
        shadowColor: '#800000',
        elevation: 8,
    }
})

export default Style