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
import Weadrobe from './screens/weadrobe';
import Match from './screens/matchClothes';
import Add from './screens/addClothes';
import Confirm from './screens/Confirm';
import Test from './screens/test';
const Stack = createStackNavigator();

export default function App() {
  const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignUp"
            component={SignUp} />
          <Stack.Screen
            name="Login"
            component={Login} />
          <Stack.Screen
            name="Home"
            component={Home} 
            initialParams={{ update: null}} />
          <Stack.Screen
            name="Weardrobe"
            component={Weadrobe} />
          <Stack.Screen
            name="matchClothes"
            component={Match} />
          <Stack.Screen
            name="addClothes"
            component={Add} 
            initialParams={{ update: false}} />
          <Stack.Screen
            name="Confirm"
            component={Confirm}
            initialParams={{ uri: '' }} />
            <Stack.Screen
            name="Test"
            component={Test}/>
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
  return (
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