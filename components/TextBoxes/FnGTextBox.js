import React, { Component } from 'react';
import { TextInput, StyleSheet,} from 'react-native';

export default function FnGTextBox({placeholder, multiline}){
  
  if (multiline){
  return (
      <TextInput
        style={styles.multilineStyle}
        placeholder={placeholder}
        multiline={true}
        numberOfLines={10}
      ></TextInput>
 
  );
  }
  else{
    return(
        <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        ></TextInput>
      
    )
  }
}

const styles = StyleSheet.create({
    inputStyle:{
        borderRadius: 5,
        borderWidth: 0.5,
        width: 360,
        height: 40,
        paddingLeft: 10
    },

    multilineStyle:{
      borderRadius: 5,
      borderWidth: 0.5,
      width: 360,
      height: 100,
      paddingLeft: 10,
    }
})