import React, {useState} from 'react';
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

import FnGTextBoxPrimary from '../../components/TextBoxes/FnGWideTextBox'
import FnGTextBoxPrimaryT from '../../components/TextBoxes/FnGWideTextBox'
import FnGShortTextBox from '../../components/TextBoxes/FnGShortTextBox'
import FnGAddBookImageButton from '../../components/Buttons/FnGAddBookImageButton'
import FnGButton from '../../components/Buttons/FnGButton'

const  PostPageA = (props) =>  {
  const [bookTitle, setBookTitle] = useState('')
  const [bookAuthor, setBookAuthor] = useState('')
  const [bookDescription, setBookDescription] = useState('')
  const [imageA, setImageA] = useState(null)
  const [imageB, setImageB] = useState(null)
  const [imageC, setImageC] = useState(null)
  const [keyboardAvoider, setKeyboardAvoider] = useState(false)

  const [isBookTitleEmpty, setBookTitleEmptyStatus] = useState(true)
  const [isBookAuthorEmpty, setBookAuthorEmptyStatus] = useState(true)
  const [isBookDescriptionEmpty, setBookDescriptionEmptyStatus] = useState(true)
  /*const checkBookTitle = () => {
    if (bookTitle.trim() == 0){
      alert('Please Enter Book Title')
      return
    }
    setBookTitleEmptyStatus(false)
    alert('Success')
  }*/
  

 

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
          
          <FnGTextBoxPrimaryT
            label="What is the name of your book?" 
            placeholder="Title" 
            multiline={false}
            onChangeText={(val) => {
              setBookTitle(val)}}
            onFocus={() => setKeyboardAvoider(false)}
            
            >
          </FnGTextBoxPrimaryT>
          
            {/*<View>{(errorCheckBookTitle) ? <Text>{bookTitle}</Text> : <Text>Errors</Text>}</View>*/}
        
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
              
          <View style={styles.buttonAlignment}>
            <FnGButton 
              text="Clear All" 
              onPress={ () => {{
                setBookTitle('') 
                setBookAuthor('') 
                setBookDescription('')
                
                }}}
              buttonStyle="secondary">
            </FnGButton>

            <FnGButton 
              text="Next" 
              onPress={() => Alert.alert("Next")} 
              buttonStyle="primary">
            </FnGButton>
          </View>
          
              <View><Text>{imageA} {bookTitle} {bookAuthor} {bookDescription}</Text></View>
          
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