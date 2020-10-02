
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
export default function Confirm({ route, navigation }) {
    const { pictureUri } = route.params;
    function MyOnPressC() {
        MyOnPressConfirm();
    }
    function MyOnPressD() {
        MyOnPressDecline();
    }
    const MyOnPressConfirm = () => {
        return (
            //navigation.navigate('Weardrobe', { name: 'Weardrobe' })
            navigation.navigate('Home', { name: 'Home' })
        );
    }
    const MyOnPressDecline = () => {
        return (
            navigation.navigate('addClothes', { name: 'addClothes' })
        );
    }
    console.log("The photo Uri:" + pictureUri);
    return (
        <View style={styles.container}>
            <Image source={{ uri: `${pictureUri}` }} style={styles.backgroundImage} />
            {/* <ImageBackground source={{uri: pictureUri}} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.button} onPress={() => MyOnPressC()}>
                    <Text style={styles.buttonText}>Confirm?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => MyOnPressD()}>
                    <Text style={styles.buttonText}>Retake</Text>
                </TouchableOpacity>
            </ImageBackground> */}
            <TouchableOpacity style={styles.button} onPress={() => MyOnPressC()}>
                <Text style={styles.buttonText}>Confirm?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => MyOnPressD()}>
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
    backgroundImage: {
        flex: 1,
        height: 360,
        width: 500,
        resizeMode: 'cover', // or 'stretch'
        justifyContent: 'center',
    },
});