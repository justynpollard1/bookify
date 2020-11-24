import React, { useState } from 'react';
import { 
  TextInput, 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  Button} from 'react-native';
import FnGButton from '../Buttons/FnGButton';


export default function FnGWideTextBox(props){
  const [isUserTypedTextEmpty, setIsUserTypedText] = useState(false)


  const isTextBoxEmpty = props.isTextBoxEmpty
  console.log( props.value + " is empty? " + isTextBoxEmpty)
  var textBoxStyle = {
    style: isTextBoxEmpty ? styles.emptyTextBoxStyle : styles.singleLineStyle
  }

  var multilineTextBoxStyle = {
    style: isTextBoxEmpty ? styles.emptyMultilineTextBoxStyle : styles.multilineStyle
  }
  
  if (props.multiline){
  return (
    
    <View>
      
      <Text style={styles.labelStyle}>{props.label}</Text>
      <View>
        <TextInput
            {...multilineTextBoxStyle}
            placeholder={props.placeholder}
            multiline={props.multiline}
            numberOfLines={6}
            onChangeText={props.onChangeText}
            onFocus={props.onFocus}
            scrollEnabled={true}
            value={props.value}
        ></TextInput>
      </View>
      <View
          style={styles.clearButtonStyle}>
          <FnGButton
           buttonStyle="clear"
           onPress={props.onPress}></FnGButton>
        </View>
    </View>
  )
  }
  else{
    return(
      <View >
        <Text style={styles.labelStyle}>{props.label}</Text>
        <View style={styles.textClearButtonViewStyle}>
          <TextInput
            {...textBoxStyle}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            onFocus={props.onFocus}
            value={props.value}
          ></TextInput>
        </View>
        <View
          style={styles.clearButtonStyle}>
          <FnGButton
           buttonStyle="clear"
           onPress={props.onPress}></FnGButton>
        </View>
          
        
      </View>
      
    )
  }
}


const windowWidth = Dimensions.get('window').width
const textBoxwidth = windowWidth * 0.90
const textBoxHeight = 40

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

    emptyTextBoxStyle:{
      borderRadius: 5,
      borderWidth: 1.5,
      width: textBoxwidth,
      height: textBoxHeight,
      paddingLeft: 5,
      marginBottom: 20,
      borderColor: 'red'
    },

    textClearButtonViewStyle:{
      position: 'relative',
    },

    clearButtonStyle:{
      position: 'absolute',
      marginLeft: textBoxwidth * 0.92,
      marginTop: 30,
      zIndex: 10
    },

    emptyMultilineTextBoxStyle:{
      borderRadius: 5,
      borderWidth: 1.5,
      width: textBoxwidth,
      height: 100,
      paddingLeft: 5,
      marginBottom: 20,
      borderColor: 'red'
    }

})