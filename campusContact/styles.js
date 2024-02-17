import { StyleSheet } from 'react-native';
import * as COLOR from '../utils/color'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const styles = StyleSheet.create({
  contactContainer: {
    backgroundColor: COLOR.lightMaroon,
    borderRadius: 8,
    marginBottom: 10,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    margin: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textDecorationLine: 'underline',
    color: COLOR.white
  },
  details: {
    fontSize: 15,
    marginBottom: 3,
    color: COLOR.white
  },
  photo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: COLOR.maroon,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    elevation: 10,
    alignItems: 'center'
  },
  button1: {
    backgroundColor: COLOR.black,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    elevation: 10,
    marginBottom: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: COLOR.white,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 30,
    color: 'black',

  },
  main: {
    marginTop: 10
  },
  label: {
    color: COLOR.maroon,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: responsiveWidth(90),
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'black',
  },

  inputContainer: {
    marginLeft: 20
  },

  dropdownText: {
    width: responsiveWidth(90),
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    textAlign: 'left',
    flexDirection: 'row',
    textAlignVertical: 'center',
    color: '#000',
    fontWeight: 'bold'
  },
  dropdownStyle: {

    fontSize: 20,
    width: responsiveWidth(90),
    height: responsiveHeight(25),
    borderWidth: 1,
    borderColor: '#912929',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontWeight: 'bold',
  },

  dropdownTextStyle: {
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 14,
    color: COLOR.blue
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 10
  }
});

export default styles;
