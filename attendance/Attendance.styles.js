import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { white, shadowcolor, titletext, desctext, black } from '../utils/color';
import { cartborderradius, elevationsize } from '../utils/constant';

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 400,
        marginHorizontal: 130
    },
    heading: {
        fontSize: 35,
        fontWeight: 'bold',
        color: black,
        marginBottom: 16,
        marginLeft: 10,
        marginTop: 10
    },
    clickable: {
        width: windowWidth / 2 - 20,
        height: '20%',
        backgroundColor: white,
        borderRadius: cartborderradius,
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: shadowcolor,
        elevation: elevationsize,
        flex: 1
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: titletext
    },
    cardText: {
        fontSize: 16,
        color: desctext,
    }
});

export default styles;
