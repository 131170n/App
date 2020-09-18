import { View } from 'antd-mobile';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

export default function Confirm({ navigation }) {

    // const MyOnPressConfirm = () => {
    //     return (
    //         navigation.navigate('Weardrobe', { name: 'Weardrobe' })
    //     );
    // }
    // const MyOnPressDecline = () => {
    //     return (
    //         navigation.navigate('addClothes', { name: 'addClothes' })
    //     );
    // }
    return (
        <View style={styles.container}>
            <Text>kuku</Text>
            {/* <Image source={photo} style={styles.backgroundImage} />
            <TouchableOpacity style={styles.button} onPress={() => MyOnPressConfirm()}>
                <Text style={styles.buttonText}>Confirm?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => MyOnPressDecline()}>
                <Text style={styles.buttonText}>Retake</Text>
            </TouchableOpacity> */}
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
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
});