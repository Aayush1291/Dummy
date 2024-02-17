import { Dimensions, StyleSheet, } from 'react-native';
import * as COLORS from '../../utils/color';
const windowWidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;
const style = StyleSheet.create({
    outerView: {
        width: windowWidth,
        height: windowheight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        padding: 10,
        fontWeight: 'bold',
        color: COLORS.maroon,
        fontSize: 20,
    },
})
export default style;