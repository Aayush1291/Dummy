import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Octicons from 'react-native-vector-icons/Octicons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
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
          style={{ position: 'absolute', right: responsiveWidth(5), marginRight: responsiveWidth(5), marginTop: responsiveHeight(3.8)}} // Position absolutely and give higher zIndex
          onPress={() => setShowPassword(!showPassword)}
        >
          <Octicons
            name={showPassword ? 'eye' : 'eye-closed'}
            style={{ color: '#2585DB' }}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton}>
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
