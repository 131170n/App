import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, CameraRoll, RefreshControl, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function addClothes() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [myRef, setMyRef] = useState(null);
  const takePicture = () => {
    console.log('reach');
      console.log('reach1');
      myRef.takePictureAsync({ onPictureSaved: onPictureSaved });
  };
  const onPictureSaved = photo => {
    console.log(photo);
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