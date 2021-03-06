import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { picDir, ensureDirExists } from '../components/directory';
import * as FileSystem from 'expo-file-system';
import moment from 'moment';

export default function AddClothes({ route, navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [myRef, setMyRef] = useState(null);
  const shouldRefresh = route.params.shouldRefresh;
  console.log("this is shouldRefresh in addClothes: "+shouldRefresh);
  const takePicture = () => {
    ensureDirExists();
      myRef.takePictureAsync({ onPictureSaved: onPictureSaved });
  };

  const options = {
    from: "",
    to: "",
  }
  const onPictureSaved = photo => {
    options.from=`${photo.uri}`;
    console.log(photo.uri);
    var nameImage=`${moment().format("YYMMDD_HHmmSSS")}.jpg`;
    options.to=`${picDir}/${nameImage}`;
    console.log(picDir);
    FileSystem.moveAsync(options);
    confirm(options.to);
  }
  const confirm = (uri) => {
    console.log(shouldRefresh)
    return (
      navigation.navigate('Confirm', { name: 'Confirm', pictureUri: uri, shouldRefresh: shouldRefresh })

    );
  }
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={(ref) => { setMyRef(ref) }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <TouchableOpacity style={styles.button} onPress={() => takePicture()}>
                <Text style={styles.buttonText}>Take Picture</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
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
      padding: 10,
      borderRadius: 12,
  },
  buttonText: {
      fontSize: 15,
      color: '#fff',
  },
});