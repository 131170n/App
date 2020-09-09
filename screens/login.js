import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import SignUp from './signup'
export default function Login() {

  function onInputChange(text) {
  }

  function myOnPressHome() {
    alert('hi');
    //isn't working... why? no idea...
  };
  function myOnPressSignUp() {
    alert('hi1');
    //isn't working... why? no idea...
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 250 }}
        placeholder="Email"
        onChangeText={(text) => onInputChange(text)}
      />
      <TextInput
        style={{ width: 250 }}
        placeholder="Password"
        onChangeText={(text) => onInputChange(text)}
      />

      <TouchableOpacity style={styles.button} onPress={() => myOnPressHome()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => myOnPressSignUp()}>
        <Text style={styles.buttonText}>Don't have an account? Sign Up now</Text>
      </TouchableOpacity>
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
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 10,
    color: '#fff',
    
  },
});