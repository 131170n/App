import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import SignUp from './signup'
export default function Login() {
  const [password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [buttonClass, setButtonClass] = useState(styles.button);
  function onInputChangePassword(text) {
      setPassword(text);
  }
  function onInputChange(text) {
      setEmail(text);
  }
  function isAllowed() {
      if (password!=='' && Email!=='') {
          setButtonClass(styles.button);
          return (true);
      }
      else {
          setButtonClass(styles.buttonError);
      }
  }
  function myOnPressHome() {
    if(isAllowed())
    {
      alert('go');
    }
  };
  function myOnPressSignUp() {
    alert('hi1');
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
        onChangeText={(text) => onInputChangePassword(text)}
      />

      <TouchableOpacity style={buttonClass} onPress={() => myOnPressHome()}>
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
  buttonError: {

    backgroundColor: "red",
    padding: 5,
    borderRadius: 10,
},
  buttonText: {
    fontSize: 10,
    color: '#fff',
    
  },
});