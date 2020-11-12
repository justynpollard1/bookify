import { getLightEstimationEnabled } from 'expo/build/AR';
import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View} from 'react-native';

export default function FnGShortTextBox({label, placeholder, onChangeText}){
  
    return(
      <View>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput
          style={styles.shortTextBoxStyle}
          placeholder={placeholder}
          onChangeText={onChangeText}
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
      marginBottom: 30,
      borderColor: '#676767'
      
    },

    labelStyle:{
      fontSize: 14,
      color: '#676767',
      paddingLeft: 5,
      paddingBottom: 2,
    },

})