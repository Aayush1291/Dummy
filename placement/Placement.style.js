import { StyleSheet } from 'react-native';
import { black, blue, gray, green, lightgray, maroon, red, white } from '../utils/color';


const styles = StyleSheet.create({

   
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
  },
    
    content: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        alignItems: 'center',
    },
    image1: {
        width: 350,
        height: 160,
        marginBottom: 20,
        marginHorizontal: 1,
    },
    image2: {
        width: 350,
        height: 100,
        marginBottom: 20,
        marginHorizontal: 1,
    },
    image3: {
        width: 350,
        height: 100,
        marginBottom: 20,
        marginHorizontal: 1,
    },
    image4: {
        width: 350,
        height: 160,
        marginBottom: 20,
        marginHorizontal: 1,
    },
    image5: {
        width: 350,
        height: 160,
        marginBottom: 20,
        marginHorizontal: 1,
    },
    image6: {
        width: 350,
        height: 150,
        marginBottom: 20,
        marginHorizontal: 1,
    },
    
    section: {
        alignSelf: 'stretch',
        marginVertical: 10,
    },
    subHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 15,
        color: maroon,
    },
    contactText: {
        fontSize: 20,
        marginBottom: 5,
        color: blue,
        textDecorationLine: 'underline',
    },

    academicYear: {
        color: blue,
        textDecorationLine: 'underline',
        marginBottom: 8,
        fontSize: 20,
    },
    aboutText: {
        color: black,
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 5,
        marginRight:5,
        padding: 5,
        paddingHorizontal:10,
        marginEnd: 10,

    },
    pdfContainer: {
        alignItems: 'center',
        marginBottom: 16,

    },
    pdfYear: {
        fontSize: 14,
        marginTop: 8,
        color: black,
    },
    placementDetailsContainer: {
        flexDirection: 'row',
        marginLeft: 20,
        marginHorizontal: 50,
        flexWrap: 'wrap',
        justifyContent: 'space-between',

    },
    pdfMargin: {
        marginTop: 10,
        marginRight: 60,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: black,
        borderRadius: 10,
        height:50,

    },
    about: {
        color: black,
        fontWeight: 'bold',
        fontSize: 20,
    },
    icon: {
        fontSize: 20,
        color: black,
        marginHorizontal: 1,
    },
       addButton: {
        backgroundColor: maroon,
        fontSize: 16,
        color: maroon,
        marginBottom: 8,
      },
      addButtonText: {
        backgroundColor: maroon,
        fontSize: 16,
        color: maroon,
        marginBottom: 8,
      },
      text1:{
        color:black,
        fontSize: 18,
        marginHorizontal: 20,
        borderWidth:1,
        marginVertical: 10,
        borderRadius: 10,
        padding:10,
      },
      button1:{
        backgroundColor:maroon,
        marginVertical: 15,
        borderRadius: 10,
        padding:10,
        width:'50%',
        marginHorizontal:100,
        
      },
      buttontext1:{
        color: white,
        fontSize: 14,
        marginHorizontal: 20,
        textAlign: 'center',
      },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  about: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: black,
    borderWidth:3,
    borderRadius: 30,
    padding: 10,
    marginBottom: 2,
    marginHorizontal:1,

   
  },
  
  placementList: {
    marginTop: 10,
    color:black,
  },
  titleContainer: {
    backgroundColor: lightgray,
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  successText: {
    marginTop: 16,
    color: green,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttontext: {
    color: white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor:maroon,
    marginTop: 1,
    marginVertical: 15,
    borderRadius: 10,
    padding:10,
    width:'50%',
    marginHorizontal:100,
    
  },
  info: {
    marginBottom: 4,
    color:black,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 15,
    color: gray,
    
  },
  scrollView: {
    maxHeight: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: black,
  },
  titleText: {
    color: gray,
  }, 
});

export default styles;