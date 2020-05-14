import React, {useState}  from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import * as firebase from 'firebase';
import "firebase/storage";
import "firebase/database"
import "@firebase/firestore"

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


if(!firebase.apps.length) {
firebase.initializeApp(firebaseConfig)
}



export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }


 collectionName = 'post-1234';

  storage  = firebase.storage();
  collection = firebase.firestore().collection(this.collectionName);

state = {
  money: 0,
  title: '',
  url: ''
}

handleMoney = (text) => {
  this.setState({ money: text })
}
handleTitle = (text) => {
  this.setState({ title: text })
}

post = (money, title, url) => {
  firebase.firestore().collection("posts").add({
    money: money,
    title: title,
    image: url
  }).then(ref => console.log(ref)).catch(error => console.log("an error " +  error));
}

  onChooseImagePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    console.log(result);

    if(!result.cancelled) {
      // this.uploadImage(result.uri)
      // .then(() => {
      //   console.log('Sucess');
      // })
      // .catch((error) => {
      //   console.log(error);
      // })

      const response = await fetch(result.uri);
      const blob  = await response.blob();
      const upload = this.storage.ref(`images/posts`).put(blob);
      upload.on('state_changed', 
      (snapshot) => {

      }, 
      (error) => {

      }, 
      () => {
        this.storage.ref('images/posts').child(result.uri).getDownloadURL().then(url => {
          console.log(url);
          console.log("SUCCESSS");
          this.setState({url});
        })
      }
      )
    }
  }

  // uploadImage = async (uri) => {
  //   const response = await fetch(uri);
  //   const  blob = await response.blob();

  //   const ref = firebase.storage().ref().child("images/")
  //   return ref.put(blob);
  // }

  render() {
    return (
        <SafeAreaView style={ styles.container }>
      <Button title="Choose image...." onPress={this.onChooseImagePress}>  </Button>
      <Image  style= {styles.image} source={{uri: this.state.url}} /> 
      <TextInput
      style={styles.input}
      placeholder="Title"
      onChangeText = {this.handleTitle}
    />
     <TextInput
     style={styles.input}
      placeholder="Amount"
      onChangeText= {this.handleMoney}
    />

<TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.post(this.state.money, this.state.title, this.state.url)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

      </SafeAreaView>
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input:  {
      height: 40,
      borderColor: '#66BEFD',
      borderWidth: 1,
      margin: 15,
      width: 160
    },
    submitButton: {
      backgroundColor: '#66BEFD',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },
   image: {
     height: 100,
     width: 90
   }

  });
