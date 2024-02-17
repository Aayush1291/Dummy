import {StyleSheet } from 'react-native';
import { black, blue, gray, green, red, white } from '../utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  teacherName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    color: black,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 16,
    color: black,
  },
  tableBorderStyle: {
    borderWidth: 2,
    borderColor: black,
  },
  tableHeader: {
    height: 30, 
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: black ,
    
  },
  dayHeading: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: blue,
  },
  tableRow: {
    flexDirection: 'row',
  },
  dayText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: blue,
  },
  
  cellText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  subjectText: {
    color: red, 
  },
  classText: {
    color: black, 
  },
  timingText: {
    color: green, 
  },
});
export default styles;


