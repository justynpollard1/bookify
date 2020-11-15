import { getLightEstimationEnabled } from 'expo/build/AR';
import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View} from 'react-native';

export default function FnGShortTextBox(props){
  
    return(
      <View>
        <Text style={styles.labelStyle}>{props.label}</Text>
        <TextInput
          style={styles.shortTextBoxStyle}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          onFocus={props.onFocus}
          keyboardType={props.keyboardType}
        ></TextInput>
      </View>
      
    )
  
}

const styles = StyleSheet.create({
    shortTextBoxStyle:{
      borderRadius: 5,
      borderWidth: 0.5,
      width: 173,
      height: 40,
      paddingLeft: 5,
      marginBottom: 20,
      borderColor: '#676767',
      marginLeft: 7,
      marginRight: 7
      
    },

    labelStyle:{
      fontSize: 16,
      color: '#676767',
      paddingLeft: 10,
      paddingBottom: 2,
    },

})