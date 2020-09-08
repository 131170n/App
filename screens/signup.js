import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
//import PasswordField from 'react-native-password-field';



export default function SignUp() {

    function onInputChange(text){
    }


    return (
        <View style={styles.container}>
            <Text>hello</Text>
            <TextInput
            style={{width: 250}}
            placeholder="Email"
            onChangeText={(text) => onInputChange(text)}
          />
          <TextInput
            style={{width: 250}}
            placeholder="Password"
            onChangeText={(text) => onInputChange(text)}
          />
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
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});