// @ts-nocheck
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import SignUp from './screens/signup';
import Home from './screens/home';
import { View } from 'antd-mobile';
import Temp from './screens/temp';
const Stack = createStackNavigator();

export default function App() {
  const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}/>
          <Stack.Screen
          name="Login"
          component={Login}/>
          <Stack.Screen
          name="Home"
          component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
  
    );
  }
  return(
    MyStack()
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "black",
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  },
});