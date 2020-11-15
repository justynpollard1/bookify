import { getLightEstimationEnabled } from 'expo/build/AR';
import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View} from 'react-native';


export default function FnGWideTextBox(props){
  
  if (props.multiline){
  return (
    <View>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <TextInput
          style={styles.multilineStyle}
          placeholder={props.placeholder}
          multiline={props.multiline}
          numberOfLines={6}
          onChangeText={props.onChangeText}
          onFocus={props.onFocus}
      ></TextInput>
    </View>
  )
  }
  else{
    return(
      <View>
        <Text style={styles.labelStyle}>{props.label}</Text>
        <TextInput
          style={styles.singleLineStyle}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          onFocus={props.onFocus}
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
      marginBottom: 20,
      borderColor: '#676767'
      
    },

    multilineStyle:{
      borderRadius: 5,
      borderWidth: 0.5,
      width: 360,
      height: 100,
      paddingLeft: 5,
      marginBottom: 20,
      borderColor: '#676767'
    },

    labelStyle:{
      fontSize: 16,
      color: '#676767',
      paddingLeft: 5,
      paddingBottom: 2,
      
    },

})