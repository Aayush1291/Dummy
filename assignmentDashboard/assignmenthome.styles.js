import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import * as COLORS from '../utils/color';


const styles = StyleSheet.create({
    innerContainer:{
        flex: 1,
        paddingTop:'25%',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        elevation: 3,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      subtitle: {
        fontSize: 16,
        marginBottom: 8,
      },
      text: {
        fontSize: 14,
      },
      linktext: {
        color: COLORS.blue,
      },
});

export default styles;