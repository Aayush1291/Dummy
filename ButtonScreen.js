// ButtonScreen.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonScreen = ({ navigation }) => {
  const goToHomeStack = () => {
    navigation.navigate('HomeStack'); // This should navigate to the "HomeStack" tab
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={goToHomeStack}
      >
        <Text style={styles.buttonText}>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ButtonScreen;
