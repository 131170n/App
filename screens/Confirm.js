
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import { updateLocale } from 'moment';
export default function Confirm({ route, navigation }) {
    const { pictureUri } = route.params;
    const shouldRefresh = route.params.shouldRefresh;
    function MyOnPressC() {
        MyOnPressConfirm();
    }
    function MyOnPressD() {
        MyOnPressDecline();
    }
    const MyOnPressConfirm = () => {
        return (
            //navigation.navigate('Weardrobe', { name: 'Weardrobe' })
            navigation.navigate('Home', { name: 'Home', shouldRefresh: !shouldRefresh})
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
            <ImageBackground source={{ uri: `${pictureUri}` }} style={styles.backgroundImage} >
                <AntDesign name="checksquareo" size={24} color="white" onPress={() => MyOnPressC()} />
                <AntDesign name="minussquareo" size={24} color="white" onPress={() => MyOnPressD()} />
            </ImageBackground>
            {/* <ImageBackground source={{uri: pictureUri}} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.button} onPress={() => MyOnPressC()}>
                    <Text style={styles.buttonText}>Confirm?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => MyOnPressD()}>
                    <Text style={styles.buttonText}>Retake</Text>
                </TouchableOpacity>
            </ImageBackground> */}
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
        height: '100%',
        width: '100%',
        resizeMode: 'cover', // or 'stretch'
        flexDirection: "row", 
        alignItems: "flex-end", 
        justifyContent: "space-around",
    },
});