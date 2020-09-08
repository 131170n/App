// @ts-nocheck
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignUp from './screens/signup';
import Login from './screens/login';
let loginT=false;
export default function App() {
  
  if(loginT === false){
    return (
      <View style={styles.container}>
        <Login></Login>
      </View>
    );
  }
  
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
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});