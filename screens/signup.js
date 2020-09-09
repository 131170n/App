
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
//import PasswordField from 'react-native-password-field';

const [password, setPassword] = useState('');
const [Confirm, setConfirm] = useState(false);

export default function SignUp() {

    function onInputChangePassword(text) {
        setPassword(text);
        setConfirm(true);
    }
    function onInputChange(text){
        
    }
    function onInputChangeConfirm(text){
        if(password.valueOf()===text)
        {
            alert('error')
        }
    }
    function myOnPressHome() {
        alert('hi');
    };
    function myOnPressLogin() {
        alert('hi1');
    };

    return (
        <View style={styles.container}>
            <Text>hello</Text>
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
            <TextInput
                style={{ width: 250 }}
                placeholder="Confirm Password"
                onChangeText={(text) => onInputChangeConfirm(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => myOnPressHome()}>
                <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => myOnPressLogin()}>
                <Text style={styles.buttonText}>Already has an account? Login now</Text>
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