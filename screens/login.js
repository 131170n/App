import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
export default function Login({ navigation }) {
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
    if (password !== '' && Email !== '') {
      setButtonClass(styles.button);
      return (true);
    }
    else {
      setButtonClass(styles.buttonError);
    }
  }
  function myOnPressHome() {
    if (isAllowed()) {
      HomeScreen()
    }
  };
  function myOnPressSignUp() {
    SignUpScreen()
  };
  const SignUpScreen = () => {
    return (
      navigation.navigate('SignUp', { name: 'SignUp' })
    );
  }
  const HomeScreen = () => {
    return (
      navigation.navigate('Home', { name: 'Home' })
    );
  }

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