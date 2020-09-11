import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';

export default function SignUp({ navigation }) {
    
    const [password, setPassword] = useState('');
    const [Confirm, setConfirm] = useState('');
    const [Email, setEmail] = useState('');
    const [buttonClass, setButtonClass] = useState(styles.button);
    
    function onInputChangePassword(text) {
        setPassword(text);
    }
    function onInputChange(text) {
        setEmail(text);

    }
    function onInputChangeConfirm(text) {
        setConfirm(text);
    }
    function isAllowed() {
        if (Confirm === password && Email !== '') {
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
    function myOnPressLogin() {
        LoginScreen()
    };
    const LoginScreen = () => {
        return (
            navigation.navigate('Login', {name: 'Login'})
        )
    }
    const HomeScreen = () => {
        return (
            navigation.navigate('Home', {name: 'Home'})
        )
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