import { StyleSheet } from "react-native";
import { black, maroon, white } from '../utils/color';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: white,
    },
    content: {
      borderWidth: 1,
      borderColor: black,
      padding: 10,
      marginVertical: 5,
      color: black,
      borderRadius: 10,
    },
    sectionContainer: {
      marginTop: 10,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
      paddingRight: 10, 
    },
    heading: {
      fontSize: 16,
      color: black,
      marginRight:10,
      marginVertical:10,
    },
    arrowIcon: {
      fontSize: 14,
      position: 'absolute',
      right: 10,
    },
    queryTypeContainer: {
     borderBlockColor: black,
     borderWidth: 1,
      padding: 10,
      marginTop: 10,
      borderRadius: 10,
    },
    queryType: {
      fontSize: 16,
      marginVertical: 5,
      color: black,
    },
    input: {
      borderWidth: 1,
      borderColor: black,
      padding: 10,
      marginVertical: 5,
      height: 120,
      color: black,
      borderRadius: 10,
    },
    button: {
      backgroundColor: maroon,
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical:20,
      borderRadius: 10,
    },
    buttonText: {
      color: white,
      fontSize: 16,
      fontWeight: 'bold',
    },
    selectedQueryTypeText:{
      fontSize: 16,
      marginVertical: 5,
      color: black,
    },
    QueryTypeinput: {
      borderWidth: 1,
      borderColor: black,
      padding: 10,
      marginVertical: 5,
      height: 50,
      color: black,
      borderRadius: 10,
    },
  });

  export default styles;