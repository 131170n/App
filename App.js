// @ts-nocheck
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignUp from './screens/signup';
import Login from './screens/login';
import Home from './screens/home';


export default function App() {
  
    return (
      <View style={styles.container}>
        <SignUp/>
      </View>
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