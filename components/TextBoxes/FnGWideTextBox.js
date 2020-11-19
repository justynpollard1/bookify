import React, { useState } from 'react';
import { 
  TextInput, 
  StyleSheet, 
  Text, 
  View,
  Dimensions} from 'react-native';


export default function FnGWideTextBox(props){
  const [isUserTypedTextEmpty, setIsUserTypedText] = useState(false)

  
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
          scrollEnabled={true}
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


const windowWidth = Dimensions.get('window').width
const textBoxwidth = windowWidth * 0.90

const styles = StyleSheet.create({
    singleLineStyle:{
      borderRadius: 5,
      borderWidth: 0.5,
      width: textBoxwidth,
      height: 40,
      paddingLeft: 5,
      marginBottom: 20,
      borderColor: '#676767'
      
    },

    multilineStyle:{
      borderRadius: 5,
      borderWidth: 0.5,
      width: textBoxwidth,
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