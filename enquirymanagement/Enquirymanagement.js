import { StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import React,{ useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Menu, Divider,
  Appbar,
  Provider,
  Surface,
  ThemeProvider,
} from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";
// import { NavigationContainer } from '@react-navigation/native';

const Enquiry = ()=>{
  const [Name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [Year,setYear]=useState(false);
  const [Dept,setDept]=useState(false);
  const [Comment,setComment]=useState('');
  const [Rollno,setRollno]=useState('');
  const [submitdept, setsubmitdept] = useState(null);
  const [submityear, setsubmityear] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const [dept, setdept] = useState("");
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  const [year, setyear] = useState("");
  const deptList = [
    {
      label: "Mechanical",
      value: "Mechanical",
    },
    {
      label: "Electrical",
      value: "Electrical",
    },
    {
      label: "Automation",
      value: "Automation",
    },
    {
      label: "Computer",
      value: "Computer",
    },
    {
      label: "Civil",
      value: "Civil",
    },
  ];
  const yearList = [
    {
      label: "1st Year",
      value: "1st Year",
    },
    {
      label: "2nd Year",
      value: "2nd Year",
    },
    {
      label: "3rd Year",
      value: "3rd Year",
    },
  ];

  // const uploadFileOnPressHandler = async () => {
  //   try {
  //     const pickedFile = await DocumentPicker.pickSingle({
  //       type: [DocumentPicker.types.allFiles],
  //       copyTo:'cachesDirectory'
  //     });
  //     console.log('pickedFile======>',pickedFile);
      
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       console.log(err);
  //     } else {
  //       console.log(err);
  //       throw err;
  //     }
  //   }
  // };

  return (
    <Provider>
    <View> 
     <Text style={{ marginTop: 20,
      marginRight: 30,
       fontSize:responsiveFontSize(2.8),
       fontFamily: 'Poppins-Regular',
       }}>Feedback </Text> 
    <View>
       <TextInput
          mode='outlined'
          cursorColor='#2585DB'
          style={{ margin: responsiveWidth(4),
            backgroundColor: 'white',
            fontSize: responsiveFontSize(2.1),
            fontFamily: 'Poppins-Regular',
            width: responsiveWidth(90)}}
          outlineStyle={{ borderWidth: 1, borderColor: '#2585DB', borderRadius: 10 }}
          onChangeText={setName}
          value={Name}
          theme={{ colors: { primary: '#2585DB' } }}
          label={
            <Text style={{ color: '#2585DB', backgroundColor: 'white' }}>
              Name
            </Text>
          }
        />
    </View>
    <View>
       <TextInput
          mode='outlined'
          cursorColor='#2585DB'
          style={{ margin: responsiveWidth(4),
            backgroundColor: 'white',
            fontSize: responsiveFontSize(2.1),
            fontFamily: 'Poppins-Regular',
            width: responsiveWidth(90)}}
          outlineStyle={{ borderWidth: 1, borderColor: '#2585DB', borderRadius: 10 }}
          onChangeText={setEmail}
          value={email}
          theme={{ colors: { primary: '#2585DB' } }}
          label={
            <Text style={{ color: '#2585DB', backgroundColor: 'white' }}>
             College email id
            </Text>
          }
        />
    </View>
            
         <View style={{ width: responsiveWidth(90),
            margin: responsiveWidth(4),            
            fontSize: responsiveFontSize(2.1),
            fontFamily: 'Poppins-Regular',}}>
           <DropDown 
              label={"Select Department"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={dept}
              setValue={setdept}
              list={deptList}
            />
            <View style={styles.spacerStyle} />
            <DropDown
              // style={{borderColor:'#2585DB',backgroundColor:'white',}}
              label={"Select Year"}
              // inputContainerStyle={{ borderBottomColor: 'transparent' }}
              // dropdownMargins={{ min: 15, max: 15 }}

              mode={"outlined"}
              visible={showMultiSelectDropDown}
              showDropDown={() => setShowMultiSelectDropDown(true)}
              onDismiss={() => setShowMultiSelectDropDown(false)}
              value={year}
              setValue={setyear}
              placeholder='Select Year'
              list={yearList}
              multiSelect
              style={{
                backgroundColor: 'white',}}
            />
                      </View>  
    </View>
    <View>
       <TextInput
          mode='outlined'
          cursorColor='#2585DB'
          style={{ margin: responsiveWidth(4),
            backgroundColor: 'white',
            fontSize: responsiveFontSize(2.1),
            fontFamily: 'Poppins-Regular',
            width: responsiveWidth(90)}}
          outlineStyle={{ borderWidth: 1, borderColor: '#2585DB', borderRadius: 10 }}
          onChangeText={setRollno}
          value={Rollno}
          theme={{ colors: { primary: '#2585DB' } }}
          label={
            <Text style={{ color: '#2585DB', backgroundColor: 'white' }}>
             Enter Roll-No:
            </Text>
          }
        />
    </View>
    <View>
       <TextInput
          mode='outlined'
          cursorColor='#2585DB'
          style={{ margin: responsiveWidth(4),
            backgroundColor: 'white',
            fontSize: responsiveFontSize(2.1),
            fontFamily: 'Poppins-Regular',
            width: responsiveWidth(90)}}
          outlineStyle={{ borderWidth: 1, borderColor: '#2585DB', borderRadius: 10 }}
          onChangeText={setComment}
          value={Comment}
          theme={{ colors: { primary: '#2585DB' } }}
          label={
            <Text style={{ color: '#2585DB', backgroundColor: 'white' }}>
             Type Comments here....
            </Text>
          }
        />
    </View>
     {/* <View style={{ flex: 1, width: 80,marginTop: 70, marginLeft: 30}}>
          <Button title="Upload" onPress={async () => {
              uploadFileOnPressHandler();
          }} />
    </View> */}
    </Provider>

    )
 }

 const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  spacerStyle: {
    marginBottom: 27,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
});

export default Enquiry;