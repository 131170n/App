import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import SignUp from './signup'
export default function Login() {

  const [user, setUser] = useState('Asher');

  function onInputChange(text) {
  }

  function myOnPress() {
    alert('hi1');
    alert('hi');
    setUser('Ori');
    //isn't working... why? no idea...
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 250 }}
        placeholder="Email"
        onChangeText={(text) => onInputChange(text)}
      />

      <TouchableOpacity style={styles.button} onPress={() => myOnPress()}>
  <Text style={styles.buttonText}>Don't have an account? Sign Up now {user} </Text>
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