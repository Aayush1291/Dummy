import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonScreen from './ButtonScreen';
import BottomNav from './BottomNav';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Button">
      <Stack.Screen name="Button" component={ButtonScreen} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
