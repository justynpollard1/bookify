import { getLightEstimationEnabled } from 'expo/build/AR';
import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View} from 'react-native';

export default function FnGTextBox({label, placeholder, multiline, onChangeText}){
  
  if (multiline){
  return (
    <View>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
          style={styles.multilineStyle}
          placeholder={placeholder}
          multiline={true}
          numberOfLines={10}
          onChangeText={onChangeText}
      ></TextInput>
    </View>
  )
  }
  else{
    return(
      <View>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput
          style={styles.singleLineStyle}
          placeholder={placeholder}
          onChangeText={onChangeText}
        ></TextInput>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
    singleLineStyle:{
      borderRadius: 5,
      borderWidth: 0.5,
      width: 360,
      height: 40,
      paddingLeft: 5,
      marginBottom: 30,
      borderColor: '#676767'
      
    },

    multilineStyle:{
      borderRadius: 5,
      borderWidth: 0.5,
      width: 360,
      height: 100,
      paddingLeft: 5,
      marginBottom: 30,
      borderColor: '#676767'
    },

    labelStyle:{
      fontSize: 14,
      color: '#676767',
      paddingLeft: 5,
      paddingBottom: 2,
    }
})