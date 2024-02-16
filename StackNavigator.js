import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }}/>
      
    </Stack.Navigator>
  );
}

export default StackNavigator;
