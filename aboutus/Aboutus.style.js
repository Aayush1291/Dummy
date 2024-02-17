import {StyleSheet, Dimensions, } from 'react-native';
import {black, blue, green, maroon,red,yellow} from '../utils/color';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const imageHeight = (windowWidth * 2100) / 800;


const styles = StyleSheet.create({

 
    container: {},
    content: {
      paddingTop: 20,
      paddingBottom: 40,
    },
    image: {
      width: '100%',
      height: imageHeight,
      marginBottom: 20,
      alignSelf: 'center',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
      color:maroon,
      paddingHorizontal: 20,
      paddingBottom: 20,
      
      
      
    },
    description: {
      fontSize: 16,
      marginBottom: 10,
      textAlign: 'justify',
      color: black,
      paddingHorizontal: 20,
      paddingBottom: 20,
      
    },
    programsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
      paddingHorizontal: 20,
      paddingBottom: 20,
      
    },
    programName: {
      flex: 1,
      fontSize: 18,
      marginRight: 10,
      textAlign: 'justify',
      color:black,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    programIntake: {
      fontSize: 16,
      fontWeight: 'bold',
      color:black,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    remarks: {
      fontSize: 17,
      fontStyle: 'italic',
      marginBottom: 10,
      textAlign: 'justify',
      color: red,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    link: {
      fontSize: 16,
      color: blue,
      marginBottom: 5,
    },
    heading1: {
      flexDirection:'row',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      color:maroon,
    },
      heading2: {
        flexDirection:'row',
        textDecorationLine: 'underline',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 5,
        color:maroon,
      },
      
      coloredSection: {
   
        backgroundColor: yellow, 
      },
      coloredSection1: {
  
        backgroundColor: yellow, 
      },
        
    });
    export default styles;


    