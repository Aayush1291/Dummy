import { StyleSheet } from 'react-native';
import * as COLORS from '../utils/color';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    innerContainer:{
        flex: 1,
        margin: 20,
    },
    label: {
        fontSize:20,
        color:COLORS.black,
        marginTop:10,
    },
    input:{
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
    },
      dropdownContainer: {
        width: '100%', 
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: 10, 
      },
    picker:{
        width:'10',
    },
    buttonG: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
      },
});

export default styles;