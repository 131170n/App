import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground, TextBase, AsyncStorage } from 'react-native';
import { picDir } from '../components/directory';
import * as FileSystem from 'expo-file-system';
import { render } from 'react-dom';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ImageSlider from 'react-native-image-slider';
import { TextInput } from 'react-native-gesture-handler';
import { and } from 'react-native-reanimated';
import { updateLocale } from 'moment';
// import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default function Home({ navigation, route }) {
    const [sources, setSources] = useState([])
    const [currently, setCurrently] = useState(0);
    let shouldRefresh = route.params.shouldRefresh;
    console.log("this is from the route: " + route.params.shouldRefresh + " and we got: " + shouldRefresh)
    useEffect(() => {
        (async () => {
            console.log("this are the params 1: " + shouldRefresh);
            console.log("this is picDir " + picDir);
            const tmp = await FileSystem.readDirectoryAsync(picDir);
            setSources(tmp.sort());
            setCurrently(tmp.length - 1);
            console.log("this is sources " + tmp);
            console.log("this is from the route 2: " + route.params.shouldRefresh + " and we got: " + shouldRefresh)
        })();
    }, [shouldRefresh]);
    function myOnPressWeardrobe() {
        navigation.navigate('Weardrobe', { name: 'Weardrobe' })
    }
    function myOnPressMatch() {
        navigation.navigate('matchClothes', { name: 'matchClothes' })
    }
    function myOnPressAdd() {
        navigation.navigate('addClothes', { name: 'addClothes', shouldRefresh: shouldRefresh })
    }
    return (
        // flexDirection:"row", alignItems:"flex-end", justifyContent:"space-around"
        <View style={styles.container}>
            <ImageBackground source={{ uri: `${picDir}/${sources[currently]}` }} style={[styles.backgroundImage, { height: '100%', width: '100%', flexDirection: "row", alignItems: "flex-end", justifyContent: "space-around" }]} >
                <AntDesign name="bars" style={{ marginBottom: 15 }} size={24} color="white" onPress={() => myOnPressWeardrobe()} />
                <AntDesign name="plussquareo" style={{ marginBottom: 15 }} size={24} color="white" onPress={() => myOnPressAdd()} />
                <FontAwesome5 name="tshirt" style={{ marginBottom: 15 }} size={24} color="white" onPress={() => myOnPressMatch()} />
                {/* <TouchableOpacity style={styles.button} onPress={() => myOnPressWeardrobe()}>
                        <Text style={styles.buttonText}>Weardrobe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => myOnPressAdd()}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.button} onPress={() => myOnPressMatch()}>
                        <Text style={styles.buttonText}>Match clothes</Text>
                    </TouchableOpacity> */}
                {/* <Icon name='skin' onPress={() => myOnPressWeardrobe()}></Icon>
                    <Icon name='plus' onPress={() => myOnPressAdd()}></Icon>
                    <Icon name='table' onPress={() => myOnPressMatch()}></Icon> */}
            </ImageBackground>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor: "black",
        padding: 5,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    backgroundImage: {
        justifyContent: "center",
        alignItems: "center",
    },
});