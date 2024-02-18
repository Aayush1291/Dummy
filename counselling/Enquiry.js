import { View, Text } from 'react-native'
import React,{useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import {
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

const Enquiry = () => {
  const [Name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [Comment,setComment]=useState('');
  const [Rollno,setRollno]=useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [dept, setdept] = useState("");
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  const [year, setyear] = useState(false);
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
  const uploadFileOnPressHandler = async () => {
    try {
      const pickedFile = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        copyTo:'cachesDirectory'
      });
      console.log('pickedFile======>',pickedFile);
      
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err);
      } else {
        console.log(err);
        throw err;
      }
    }
  };


  return (
    <Provider>

<View>
     <Text 
       style={{ marginTop: 20,
       marginRight: 30,
       fontSize:responsiveFontSize(2.8),
       fontFamily: 'Poppins-Regular',
       }}>Feedback 
       </Text>
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
              label={"Select Dept"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={dept}
              setValue={setdept}
              list={deptList}
            />

             <DropDown
              label={"Select Year"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={year}
              setValue={setyear}
              list={yearList}
           
            />
            </View>
            <View >
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
    <View>
          <Button title="Upload" onPress={async () => {
              uploadFileOnPressHandler();
          }}>Upload</Button>
    </View>
    </View>
    </Provider>

  )
}

export default Enquiry;