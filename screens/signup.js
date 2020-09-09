
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
//import PasswordField from 'react-native-password-field';

export default function SignUp() {
    const [password, setPassword] = useState('empty');
    const [Confirm, setConfirm] = useState('empty');
    const [buttonClass, setButtonClass] = useState(styles.button);
    function onInputChangePassword(text) {
        setPassword(text);
    }
    function onInputChange(text){
        
    }
    function onInputChangeConfirm(text){
        setConfirm(text);
    }
    function isAllowed(){
            if(Confirm===password)
            {
                setButtonClass(styles.button);
                
                return(true);
            }
            else
            {
                setButtonClass(styles.buttonError);
            }
    }
    function myOnPressHome() {
        if(isAllowed())
        {
            alert('go');
        }
    };
    function myOnPressLogin() {
        alert('go get them');
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
            <TouchableOpacity style={buttonClass} onPress={() => myOnPressHome()}>
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