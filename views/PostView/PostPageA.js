import React, {useState, useRef} from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  Alert,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Modal
} from 'react-native';

import BookTitleTextBox from '../../components/TextBoxes/FnGWideTextBox'
import BookAuthorTextBox from '../../components/TextBoxes/FnGWideTextBox'
import BookDescriptionTextBox from '../../components/TextBoxes/FnGWideTextBox'
import FnGShortTextBox from '../../components/TextBoxes/FnGShortTextBox'
import FnGAddBookImageButton from '../../components/Buttons/FnGAddBookImageButton'
import FnGButton from '../../components/Buttons/FnGButton'
import { Input } from 'react-native-elements';

const  PostPageA = (props) =>  {
  const [bookTitle, setBookTitle] = useState('')
  const [bookAuthor, setBookAuthor] = useState('')
  const [bookDescription, setBookDescription] = useState('')
  const [imageA, setImageA] = useState(null)
  const [imageB, setImageB] = useState(null)
  const [imageC, setImageC] = useState(null)
  const [keyboardAvoider, setKeyboardAvoider] = useState(false)

  const [errorInBookTitle, setBookTitleErrorStatus] = useState(null)
  const [errorInBookAuthor, setBookAuthorErrorStatus] = useState(null)
  const [errorInBookDescription, setBookDescriptionErrorStatus] = useState(null)

  function checkBookTitleText(val){
    if(val.length < 2 || val.length > 100){
      setBookTitleErrorStatus(true)
    }
    else{
      setBookTitleErrorStatus(false)
    }

  }

  function checkBookAuthorText(val){
    if(val.length < 2 || val.length > 100){
      setBookAuthorErrorStatus(true)
    }
    else{
      setBookAuthorErrorStatus(false)
    }
  }

  function checkBookDescriptionText(val){
    if(val.length < 10 || val.length > 1000){
      setBookDescriptionErrorStatus(true)
    }
    else{
      setBookDescriptionErrorStatus(false)
    }
  }

  
  function handleNextPress(){
    if(errorInBookTitle || errorInBookAuthor || errorInBookDescription){
      return (Alert.alert("Please fix errors on the form"))
    }
    else{
      return Alert.alert("Next pressed!")
    }
  }

  return (
    <View>
    <KeyboardAvoidingView 
      behavior="position" 
      enabled={keyboardAvoider}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <FnGAddBookImageButton
            onPress={(val) => setImageA(val.type)}>
          </FnGAddBookImageButton>
          
          <BookTitleTextBox
            label="What is the name of your book?" 
            placeholder="Title (2-100 chars)" 
            multiline={false}
            onChangeText={(val) => {
              checkBookTitleText(val)
              setBookTitle(val)
              }}
            value={bookTitle}
            isTextBoxEmpty={errorInBookTitle}
            onPress={() => {{
              setBookTitle('')}
              setBookTitleErrorStatus(true)
              }}
            onFocus={() => setKeyboardAvoider(false)}
            >
          </BookTitleTextBox>

          <BookAuthorTextBox
            label="Who is the Author of the book?" 
            placeholder="Author's Name (2-100 chars)" 
            multiline={false}
            onChangeText={(val) => {
              checkBookAuthorText(val)
              setBookAuthor(val)
              }}
            value={bookAuthor}
            isTextBoxEmpty={errorInBookAuthor}
            onPress={() => {{
              setBookAuthor('')}
              setBookAuthorErrorStatus(true)
              }}
            onFocus={() => setKeyboardAvoider(true)}
            >
          </BookAuthorTextBox>


          <BookDescriptionTextBox
            label="Description of the book" 
            placeholder="Description (10-1000 characters)" 
            multiline={true}
            onChangeText={(val) => {
              checkBookDescriptionText(val)
              setBookDescription(val)
              }}
            value={bookDescription}
            isTextBoxEmpty={errorInBookDescription}
            onPress={() => {{
              setBookDescription('')}
              setBookDescriptionErrorStatus(true)
              }}
            onFocus={() => setKeyboardAvoider(true)}
            >
          </BookDescriptionTextBox>
          
            {/*<View>{(errorCheckBookTitle) ? <Text>{bookTitle}</Text> : <Text>Errors</Text>}</View>
        
          <FnGTextBoxPrimary
            label="Who is the author of the book?" 
            placeholder="Author" 
            multiline={false}
            onChangeText={(val) => setBookAuthor(val)}
            onFocus={() => setKeyboardAvoider(true)}>
          </FnGTextBoxPrimary>

          <FnGTextBoxPrimary 
            label="Tell us a bit about your book." 
            placeholder="Book Description" 
            multiline={true}
            onChangeText={(val) => setBookDescription(val)}
            onFocus={() => setKeyboardAvoider(true)}>
          </FnGTextBoxPrimary>
              */}
          <View style={styles.buttonAlignment}>
            

            <FnGButton 
              text="Next" 
              onPress={() => {handleNextPress()}} 
              buttonStyle="primary">
            </FnGButton>
            
          </View>
          
              <View><Text>{bookTitle} {bookAuthor}</Text></View>
          
        </SafeAreaView>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </View>
  
  );
}

export default PostPageA;

const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
  },

  buttonAlignment:{
    flexDirection:'row',
    marginTop: 20,
  },

  modalStyle:{
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black'
  }
});




  // post = (money, title, url) => {
  //   db.collection("posts").add({
  //     money: money,
  //     title: title,
  //     image: url
  //   }).then(ref => console.log(ref)).catch(error => console.log("an error " +  error));
  // }
  
  //   onChooseImagePress = async () => {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1
  //     });
  
  //     if(!result.cancelled) {
  //       const response = await fetch(result.uri);
  //       const blob  = await response.blob();
  //       const path = `images/testPosts${uuidv5.URL}`
  //       const storageRef = storage.ref(path);
  //     storageRef.put(blob)
  //     .then(() => console.log("Success"))
  //     .catch(err => console.log("ERROR"));
  
  //     storageRef.getDownloadURL().then(url => {
  //       this.setState({url});
  //     });
  
  //     }
  //   }