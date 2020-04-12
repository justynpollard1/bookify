import React  from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const firebaseConfig = {
  apiKey: "AIzaSyDUQ_N1jcrrfiRo0R3Tj7pol0N5-D3xoWg",
  authDomain: "test-app-96cb0.firebaseapp.com",
  databaseURL: "https://test-app-96cb0.firebaseio.com",
  projectId: "test-app-96cb0",
  storageBucket: "test-app-96cb0.appspot.com",
  messagingSenderId: "205075513499",
  appId: "1:205075513499:web:40606fe80f18dae4f8863e",
  measurementId: "G-XBXR3DSBQ0"
};
firebase.initializeApp(firebaseConfig)

export default class Post extends React.Component {



  onChooseImagePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    console.log(result);

    if(!result.cancelled) {
      this.uploadImage(result.uri, "test-image")
      .then(() => {
        console.log('Sucess');
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  uploadImage = async (uri) => {
    const response = await fetch(uri);
    const  blob = await response.blob();

    const ref = firebase.storage().ref().child("images/")
    return ref.put(blob);
  }
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Choose image...." onPress={this.onChooseImagePress}>  </Button>
      </View>
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
