import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';


export default function App() {
    function myOnPressWeardrobe() {

    }
    function myOnPressMatch() {

    }
    function myOnPressAdd() {

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => myOnPressWeardrobe()}>
                <Text style={styles.buttonText}>Weardrobe</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => myOnPressAdd()}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => myOnPressMatch()}>
                <Text style={styles.buttonText}>Match clothes</Text>
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
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 5,
        color: '#fff',
    },
});