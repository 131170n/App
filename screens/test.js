import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import 'react-native-gesture-handler';
import * as FileSystem from 'expo-file-system';
import { picDir } from '../components/directory';
export default function Test() {
  const [currently, setCurrently] = useState(0);
  const [sources, setSources] = useState([])
  function MyOnNext() {
    if(currently.valueOf() > sources.length )
    {
      setCurrently(0);
    }
    else
    {
      setCurrently(currently+1)
    }
    console.log(currently);
  }
  useEffect(() => {
    (async () => {
      setCurrently(0);
      setSources(await FileSystem.readDirectoryAsync(picDir));
      console.log(sources);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={{uri: `${picDir}/${sources[currently]}`}} />
      <TouchableOpacity style={styles.button} onPress={() => MyOnNext()}>
        <Text style={styles.buttonText}>Confirm?</Text>
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
    height: 360,
    width: 500,
    justifyContent: "flex-end",
  },
});