// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { Provider } from 'react-redux';
import { store } from './store';
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </Provider>
  );
}

export default App;

// const userobj={
//   id:"",
//   email:"",
//   password:"",
//   role:"",
//   logintype:"",
//   dept:"",
//   year:"",
//   sem:"",
// }