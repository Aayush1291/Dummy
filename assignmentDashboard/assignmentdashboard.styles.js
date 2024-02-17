import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import * as COLORS from '../utils/color';


const styles = StyleSheet.create({
    drawerStyles: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    drawerIcon: {
        position: 'absolute',
        left: 0,
        top: 0,
        margin: 16
    },
    optionText: {
        fontSize: 16,
        marginVertical: 8,
        color:COLORS.black,
    },
    selectedOptionText: {
        fontSize: 16,
        marginVertical: 8,
        color:COLORS.white,
    },
    selectedOption: {
        backgroundColor: COLORS.maroon,
    },
    optionTouchable: {
        paddingVertical: 8,
        paddingHorizontal: 16,
      },

});

export default styles;