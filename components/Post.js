import React, {useState}  from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { v5 as uuidv5 } from 'uuid'; // For version 5
import * as firebase from 'firebase';
import "firebase/storage";
import "firebase/database"
import "@firebase/firestore"
import {db, storage} from  "../firebase/Fire"

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    console.log(uuidv5.URL);
  }

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
  db.collection("posts").add({
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

    if(!result.cancelled) {
      const response = await fetch(result.uri);
      const blob  = await response.blob();
      const path = `images/testPosts${uuidv5.URL}`
      const storageRef = storage.ref(path);
    storageRef.put(blob)
    .then(() => console.log("Success"))
    .catch(err => console.log("ERROR"));

    storageRef.getDownloadURL().then(url => {
      this.setState({url});
    });

    



      // upload.on('state_changed', 
      // (snapshot) => {

      // }, 
      // (error) => {
      //   console.log(error);

      // }, 
      // () => {
      //   storage.ref('images/posts').child(result.uri).getDownloadURL().then(url => {
      //     console.log(url);
      //     console.log("SUCCESSS");
      //     this.setState({url});
      //   })
      // }
      // )


    }
  }
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
