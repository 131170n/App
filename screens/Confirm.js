import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import ImagePreview from 'react-native-image-preview';
const Stack = createStackNavigator();
let visible = true;
export default function App(photo, { navigation }) {

    const MyOnPressConfirm = () => {
        return (
            navigation.navigate('Weardrobe', { name: 'Weardrobe' })
        );
    }
    const MyOnPressDecline = () => {
        return (
            navigation.navigate('addClothes', { name: 'addClothes' })
        );
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => MyOnPressConfirm()}>
                <Text style={styles.buttonText}>Confirm?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => MyOnPressDecline()}>
                <Text style={styles.buttonText}>Retake</Text>
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
        //<ImagePreview visible={visible} source={{uri: 'photo'}} />
    },
    button: {
        backgroundColor: "black",
        padding: 5,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',
    },
});