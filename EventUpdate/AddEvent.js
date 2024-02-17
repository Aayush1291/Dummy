import React, { useState } from 'react';
import { View, TextInput, Alert, TouchableOpacity, Text } from 'react-native';
import Style from './EventUpdate.styles';
import firestore from '@react-native-firebase/firestore';

const AddEvent = () => {
    const [Title, setTitle] = useState('');
    const [Desc, setDesc] = useState('');
    const [Image, setImage] = useState('');
    const [id, setid] = useState('');
    const [Eventdate,setEventdata]=useState()
    const[date,setdate]=useState()
    const handleAdd = () => {
        setEventdata(new Date(date).getTime())
        const edit = {
            Title,
            Desc,
            Image,
            id,
            Eventdate, 
          };
        firestore()
            .collection('EventUpdate')
            .add(edit)
            .then(() => {
                Alert.alert(
                    "Success",
                    "User created Successfully",
                    [
                        {
                            text: 'Ok'
                        }
                    ],
                    [
                        {
                            cancelable: true
                        }
                    ]

                )
            })
            .catch((error) => {
                console.error('Error adding event:', error);
            });
    };

    return (
        <View >
            <View style={{backgroundColor:'#A80000'}}>
            <Text style={Style.text}>AddEvent</Text>
            </View>
            <TextInput
                style={Style.textInput}
                placeholder="Enter id"
                value={id}
                onChangeText={setid}
            />
            <TextInput
                style={Style.textInput}
                placeholder="Enter title with year"
                value={Title}
                onChangeText={setTitle}
            />
            <TextInput
                style={Style.textInput}
                placeholder="Enter Description"
                value={Desc}
                onChangeText={setDesc}
            />
            <TextInput
                style={Style.textInput}
                placeholder="Enter image url"
                value={Image}
                onChangeText={setImage}
            />
             <TextInput
                style={Style.textInput}
                placeholder="Enter event date(yyyy-mm-dd)"
                value={date}
                onChangeText={setdate}
            />
            <TouchableOpacity
            style={Style.button}
                onPress={handleAdd}
            >
                <Text style={Style.text}>Submit</Text>
            </TouchableOpacity>

        </View>
    );
};
export default AddEvent

