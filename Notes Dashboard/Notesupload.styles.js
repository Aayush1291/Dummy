import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import * as COLORS from '../utils/color';


const styles = StyleSheet.create({
    innerContainer:{
        flex: 1,
        paddingVertical:'25%',
    },
    label: {
        fontSize:20,
        color:COLORS.black,
        marginTop:10,
    },
    input:{
        borderWidth: 1,
        width:300,
    },
    datePicker:{
        marginTop:10,
    },
      dropdownContainer: {
        width: '100%', // Width of the dropdown container
        alignItems: 'center', // Align dropdown to the center
        justifyContent: 'center', // Center items vertically
        marginTop: 10, // Add space between dropdown and other elements
      },
    dropdownText: {
        fontSize: 20,
        color: COLORS.black,
        borderRadius: 10,
        borderWidth: 1,
        width: responsiveWidth(85),
        height: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(2),
        // alignContent: 'flex-end',
        alignSelf: 'center',
        textAlign: 'left',
        verticalAlign: 'middle'
    },
    dropdownStyle: {
        width: responsiveWidth(85),
        height: responsiveHeight(10),
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
    },
    
    touchableOpacity:{
    marginTop:10,
    backgroundColor:COLORS.maroon,
    padding:15,
    borderRadius:5
    },
    linkInput:{
        marginTop:10,
    },
    buttonText:{
        color:COLORS.white,
    },
    picker:{
        width:'10',
    }
});

export default styles;