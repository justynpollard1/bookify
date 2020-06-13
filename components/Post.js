import React, {useState}  from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { v5 as uuidv5 } from 'uuid'; // For version 5
import {db, storage} from  "../firebase/Fire"
import {LIGHT_GREY} from '../constants/colors'

import { MaterialIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

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

    }
  }
  render() {
    return (
       <SafeAreaView style={styles.container}>
            <View style={styles.newStyle}> 
            <MaterialIcons name="camera-alt" size={24} color="black" />
            <Text> Tap to add images </Text>
          </View>
          <View style={styles.textField}>
            <View style={styles.textContainer}>
              <Text style={styles.textInput}>What is the name of your book? </Text>
              <TextInput style={styles.input}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textInput}> What is the author of your book? </Text>
              <TextInput style={styles.input}/>
            </View>
            <View style={styles.textBoxContainer}>
              <Text style={styles.textInput}> Tell us a bit about your book </Text>
              <TextInput style={styles.inputTextBox}/>
            </View>
          </View>
          <View>
            <Text> 1 2</Text>
          </View>
          </SafeAreaView>

  
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F3F3'
    },
    newStyle: {
        width: 414,
        height: 240,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
        
    },
    input:  {
      paddingBottom: 5,
      height: 40,
      borderColor: '#676767',
      borderWidth: 0.5,
      width: 360,
      borderRadius: 5
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
   },
   textField: {
     padding: 24,
     flexDirection: 'column',
     justifyContent: 'space-between'
   },
   textInput: {
      color: '#676767',
      fontStyle: 'normal',
      fontSize: 14 
   },
   textContainer: {
      paddingBottom: 32
   },
   textBoxContainer: {
      paddingBottom: 16
   },
   inputTextBox: {
    paddingBottom: 5,
    height: 100,
    borderColor: '#676767',
    borderWidth: 0.5,
    width: 360,
    borderRadius: 5
   }

  });


//   <Button title="Choose image...." onPress={this.onChooseImagePress}>  </Button>
//   <Image  style= {styles.image} source={{uri: this.state.url}} /> 
//   <TextInput
//   style={styles.input}
//   placeholder="Title"
//   onChangeText = {this.handleTitle}
// />
//  <TextInput
//  style={styles.input}
//   placeholder="Amount"
//   onChangeText= {this.handleMoney}
// />

// <TouchableOpacity
//            style = {styles.submitButton}
//            onPress = {
//               () => this.post(this.state.money, this.state.title, this.state.url)
//            }>
//            <Text style = {styles.submitButtonText}> Submit </Text>
//         </TouchableOpacity>
