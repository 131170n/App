import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
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
            <TouchableOpacity style={[styles.button, {alignSelf: 'center', justifyContent: 'center'}]} onPress={() => myOnPressJackets()}>
                <Text style={styles.buttonText}>Jackets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {alignSelf: 'center', justifyContent: 'center'}]} onPress={() => myOnPressShirts()}>
                <Text style={styles.buttonText}>Shirts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {alignSelf: 'center', justifyContent: 'center'}]} onPress={() => myOnPressPants()}>
                <Text style={styles.buttonText}>Pants</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {alignSelf: 'center', justifyContent: 'center'}]} onPress={() => myOnPressShoes()}>
                <Text style={styles.buttonText}>Shoes</Text>
            </TouchableOpacity>
            <Feather name="home" style={{ marginBottom: 15, alignSelf:"center" }} size={24} color="black" onPress={() => HomeScreen()} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:"space-between",
        flexDirection: 'column'
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