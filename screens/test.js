import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import 'react-native-gesture-handler';
import * as FileSystem from 'expo-file-system';
import { picDir } from '../components/directory';
export default function Test() {
  const [currently, setCurrent] = useState(0);
  const [sources, setSources] = useState([])
  function MyOnNext() {
    setCurrent(currently+1);
  }
  useEffect(() => {
    (async () => {
      setSources(await FileSystem.readDirectoryAsync(picDir));
    })();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: sources[currently] }} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.button} onPress={() => MyOnNext()}>
          <Text style={styles.buttonText}>Confirm?</Text>
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: "flex-end"
  },
});