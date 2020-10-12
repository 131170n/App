import * as FileSystem from 'expo-file-system';
import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet, View } from 'react-native';
import { picDir } from '../components/directory';
import Swiper from 'react-native-swipe-image';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import GestureRecognizer from 'react-native-swipe-gestures';
// import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default function Home({ navigation, route, gestureState }) {
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
            shouldRefresh = false;
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

    function top(e) {
        if (currently + 1 > sources.length) {
            Alert.prompt('try down')
        }
        else {
            setCurrently(currently - 1);
            console.log(currently);
        }

    }//
    const _onSwipeLeft = gestureState => {
        useState({

        });
      };
    return (
        // flexDirection:"row", alignItems:"flex-end", justifyContent:"space-around"
        <View style={styles.container}>
            <GestureRecognizer
                onSwipeLeft={()=>setCurrently(currently-1)}
                onSwipeRight={()=>setCurrently(currently+1)}
                config={{
                    velocityThreshold: 0.3,
                    directionalOffsetThreshold: 80,
                }}
                style={{
                    flex: 1,
                }}>
                <ImageBackground source={{ uri: `${picDir}/${sources[currently]}` }} style={[styles.backgroundImage, { height: '100%', width: '100%', flexDirection: "row", alignItems: "flex-end", justifyContent: "space-around" }]} >
                    <AntDesign name="bars" style={{ marginBottom: 15 }} size={24} color="white" onPress={() => myOnPressWeardrobe()} />
                    <AntDesign name="plussquareo" style={{ marginBottom: 15 }} size={24} color="white" onPress={() => myOnPressAdd()} />
                    <FontAwesome5 name="tshirt" style={{ marginBottom: 15 }} size={24} color="white" onPress={() => myOnPressMatch()} />
                </ImageBackground>
            </GestureRecognizer>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'flex-end',
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