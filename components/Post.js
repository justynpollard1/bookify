import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { v5 as uuidv5 } from 'uuid'; // For version 5
import {db, storage} from  "../firebase/Fire"
import {TEXT_COLOR} from '../constants/colors'

import { MaterialIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

const Post = ({navigation}) => {
  
 
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
          <View style={styles.numberTextContainor}>
            <Text> 1 2</Text>
          </View>
          <View style={styles.buttonContainor}>
            <TouchableOpacity style={styles.buttonStyles}>
              <Text style={styles.textInput}> Clear All</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonNext}   onPress={() => navigation.navigate('PostV2')}>
              <Text style={styles.textButtonNext}> Next</Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>

  
    );
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
      paddingBottom: 5
   },
   inputTextBox: {
    paddingBottom: 5,
    height: 100,
    borderColor: '#676767',
    borderWidth: 0.5,
    width: 360,
    borderRadius: 5
   },
   buttonStyles: {
      width: 144,
      height: 40,
      borderColor: '#676767',
      borderWidth: 0.5,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center"
   },
   buttonNext: {
    width: 144,
    height: 40,
    borderColor: '#66BEFD',
    borderWidth: 0.5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
 },
 textButtonNext: {
    color: '#66BEFD',
    fontSize: 14
 },
 buttonContainor: {
   flexDirection: 'row',
   justifyContent: 'space-evenly'

 },
 numberTextContainor: {
   alignItems: "center",
   justifyContent: "center",
   padding: 16
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
    // shadowOffset: {
      //   width: 0,
      //   height: 4,
      // },
      // shadowOpacity: 0.32,
      // shadowRadius: 5.46,      



export default Post;