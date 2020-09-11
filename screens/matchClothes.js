import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
export default function Login({ navigation }) {

    const HomeScreen = () => {
        return (
            navigation.navigate('Home', { name: 'Home' })
        );
    }
    return (
        <View style={styles.container}>
            <Text>Match Clothes page</Text>
            <TouchableOpacity style={styles.button} onPress={() => HomeScreen()}>
                <Text style={styles.buttonText}>Back to Home</Text>
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