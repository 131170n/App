import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground } from 'react-native';
import { picDir } from '../components/directory';
import * as FileSystem from 'expo-file-system';
import { render } from 'react-dom';


export default function Home({ navigation }) {
    const [sources, setSources] = useState([])
    const [currently, setCurrently] = useState(0);
    useEffect(() => {
        (async () => {
            setSources(await FileSystem.readDirectoryAsync(picDir));
            setCurrently(sources.length - 1);
            console.log(sources);
        })();
    }, []);
    function myOnPressWeardrobe() {
        navigation.navigate('Weardrobe', { name: 'Weardrobe' })
    }
    function myOnPressMatch() {
        navigation.navigate('matchClothes', { name: 'matchClothes' })
    }
    function myOnPressAdd() {
        navigation.navigate('addClothes', { name: 'addClothes' })
    }
    return (
        // flexDirection:"row", alignItems:"flex-end", justifyContent:"space-around"
        <View style={styles.container}>
            <ImageBackground source={{ uri: `${picDir}/${sources[currently]}` }} style={[styles.backgroundImage, {height: '100%',width: '100%', flexDirection: "row", alignItems:"flex-end", justifyContent:"space-around"}]} >
                <TouchableOpacity style={styles.button} onPress={() => myOnPressWeardrobe()}>
                    <Text style={styles.buttonText}>Weardrobe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => myOnPressAdd()}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => myOnPressMatch()}>
                    <Text style={styles.buttonText}>Match clothes</Text>
                </TouchableOpacity>
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