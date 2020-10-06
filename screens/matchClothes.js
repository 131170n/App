import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
export default function Login({ navigation }) {

    const HomeScreen = () => {
        return (
            navigation.navigate('Home', { name: 'Home' })
        );
    }
    return (
        <View style={styles.container}>
            <Text>Match Clothes page</Text>
            <Feather name="home" style={{marginBottom: 15}} size={24} color="black" onPress={() => HomeScreen()}/>
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