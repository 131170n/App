import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
export default function Login({ navigation }) {
    function myOnPressHome() {
        HomeScreen()
    };
    function myOnPressShirts() {
    };
    function myOnPressPants() {
    };
    function myOnPressShoes() {
    };
    function myOnPressJackets() {
    };
    const HomeScreen = () => {
        return (
            navigation.navigate('Home', { name: 'Home' })
        );
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => myOnPressJackets()}>
                <Text style={styles.buttonText}>Jackets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => myOnPressShirts()}>
                <Text style={styles.buttonText}>Shirts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => myOnPressPants()}>
                <Text style={styles.buttonText}>Pants</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => myOnPressShoes()}>
                <Text style={styles.buttonText}>Shoes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => myOnPressHome()}>
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
        padding: 10,
        borderRadius: 12,
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',

    },
});