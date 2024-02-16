import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Octicons from 'react-native-vector-icons/Octicons';
import { compare } from 'react-native-bcrypt';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { teachermodule, studentmodule, guestmodule, parentmodule, TPOmodule, Adminmodule } from './Modules';
import { useAppDispatch } from './store/hooks';
import { setUserProfile,setModules } from './store/slice/profileSlice';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleLogin = async () => {
    if (!email || !password) {
        Alert.alert("Error", "Fields cannot be empty");
    } else {
        const users = firestore().collection('users');

        const querySnapshot = await users
            .where('email', '==', email)
            .limit(1)
            .get();

        if (querySnapshot.empty) {
            Alert.alert("Error", "User not found");
            return;
        }

        const user = querySnapshot.docs[0].data();
        const hashedPassword = user.password;

        compare(password, hashedPassword, async (error, isMatch) => {
            if (isMatch) {
                dispatch(setUserProfile(user));
                if (user.loginType == 'student') {
                    dispatch(setModules([
                        {
                            id: '1',
                            title: 'Student Components',
                            data: [...studentmodule]
                        },
                        {
                            id: '2',
                            title: 'Basic Components',
                            data: [...guestmodule]
                        }
                    ]));
                }
                else if (user.loginType == 'teacher') {
                    dispatch(setModules([
                        {
                            id: '1',
                            title: 'Teacher Components',
                            data: [...teachermodule]
                        },
                        {
                            id: '2',
                            title: 'Basic Components',
                            data: [...guestmodule]
                        }
                    ]));
                }
                else if (user.loginType == 'parent') {
                    dispatch(setModules([
                        {
                            id: '1',
                            title: 'Parent Components',
                            data: [...parentmodule]
                        },
                        {
                            id: '2',
                            title: 'Basic Components',
                            data: [...guestmodule]
                        }
                    ]));
                }
                else if (user.loginType == 'TPO') {
                    dispatch(setModules([
                        {
                            id: '1',
                            title: 'TPO Components',
                            data: [...TPOmodule]
                        },
                    ]));    
                }
                else if (user.loginType == 'admin') {
                    dispatch(setModules([
                        {
                            id: '1',
                            title: 'Admin Components',
                            data: [...Adminmodule]
                        }]))
                }

                navigation.navigate('BottomNav');
                await AsyncStorage.setItem("userData", JSON.stringify(user));
            } else {
                Alert.alert("Error", "Invalid email or password");
            }
        });
    }
};


  return (
    <View style={styles.container}>
      <View style={{marginTop:responsiveHeight(40)}}>
      <View style={styles.inputContainer}>
        <TextInput
          mode='outlined'
          cursorColor='#2585DB'
          outlineStyle={{ borderWidth: 1, borderColor: '#2585DB', borderRadius: 10 }}
          style={styles.input}
          onChangeText={handleEmailChange}
          value={email}
          theme={{ colors: { primary: '#2585DB' } }}
          label={
            <Text style={{ color: '#2585DB', backgroundColor: 'white' }}>
              Email
            </Text>
          }
        />
      </View>
      <View style={{
        flexDirection: 'row',
        position: 'relative', // Ensure the container is positioned relatively
      }}>
        <TextInput
          mode='outlined'
          cursorColor='#2585DB'
          outlineStyle={{ borderWidth: 1, borderColor: '#2585DB', borderRadius: 10 }}
          style={[styles.input, position='relative']} // Add zIndex to make sure TextInput is rendered above
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
          theme={{ colors: { primary: '#2585DB' } }}
          label={
            <Text style={{ color: '#2585DB', backgroundColor: 'white' }}>
              Password
            </Text>
          }
        />
        <TouchableOpacity
          style={{ position: 'absolute', right: responsiveWidth(5), marginRight: responsiveWidth(5), marginTop: responsiveHeight(4.5)}} // Position absolutely and give higher zIndex
          onPress={() => setShowPassword(!showPassword)}
        >
          <Octicons
            name={showPassword ? 'eye' : 'eye-closed'}
            style={{ color: '#2585DB' }}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton}
      onPress={handleLogin}
      >
        <Text style={styles.submitButtonText}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    backgroundColor: 'white',
  },
  input: {
    margin: responsiveWidth(4),
    backgroundColor: 'white',
    fontSize: responsiveFontSize(2.1),
    fontFamily: 'Poppins-Regular',
    width: responsiveWidth(90)
  },
  submitButton: {
    backgroundColor: '#2b72a9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: responsiveWidth(4),
    borderRadius: 10,
    marginTop: responsiveHeight(2),
  },
  submitButtonText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Regular',
  },
});

export default LoginScreen;
