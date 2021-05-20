import React, { useState, useEffect } from 'react';
import { Platform, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { Button } from 'react-native-paper';
import { storage } from '../backend/firebaseSetup';

export default function AppImagePicker() {
  const [image, setImage] = useState(null);


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    console.log(result);

    if (!result.cancelled) {
      uploadImage(result.uri, "test")
        .then((url) => {
          setImage(url)
          console.log("success", url)
        })
        .catch((error) => console.log("error", error))
    }
  };
  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = response.blob();
    let ref = storage.ref().child("images/" + imageName);
    const snapshot = await ref.put(blob);
    const remoteURL = await snapshot.ref.getDownloadURL();
    return remoteURL;
  }
  return (
    <>
      <Button mode="contained" color="#34D399"
        onPress={pickImage}>
        Upload Image
    </Button>
      <Image source={{ uri: image }} />
    </>
  );
}