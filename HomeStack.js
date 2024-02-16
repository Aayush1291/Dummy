import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import S1 from './S1';
import S2 from './S2';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="S1" component={S1} options={{ headerShown: false }}/>
      <Stack.Screen name="S2" component={S2} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default HomeStack;
