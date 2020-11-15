import React, {useState} from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  Alert,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import FnGTextBoxPrimary from '../../components/TextBoxes/FnGWideTextBox'
import FnGShortTextBox from '../../components/TextBoxes/FnGShortTextBox'
import FnGAddBookImageButton from '../../components/Buttons/FnGAddBookImageButton'
import FnGButton from '../../components/Buttons/FnGButton'

const  PostPageA = () =>  {
  const [bookTitle, setBookTitle] = useState()
  const [bookAuthor, setBookAuthor] = useState()
  const [bookDescription, setBookDescription] = useState()
  const [keyboardAvoider, setKeyboardAvoider] = useState(false)
  
  return (
    <KeyboardAvoidingView 
    
      behavior="position" 
      enabled={keyboardAvoider}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
      <FnGAddBookImageButton
        onPress={() => Alert.alert('Adding Image Pressed')}>

      </FnGAddBookImageButton>
      <FnGTextBoxPrimary 
        label="What is the name of your book?" 
        placeholder="Title" 
        multiline={false}
        onChangeText={(val) => setBookTitle(val)}
        onFocus={() => setKeyboardAvoider(false)}>
      </FnGTextBoxPrimary>

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
          onPress={ () => Alert.alert('Cleared')}
          buttonStyle="secondary">
        </FnGButton>

        <FnGButton 
          text="Next" 
          onPress={() => Alert.alert('Next Pressed')} 
          buttonStyle="primary">
        </FnGButton>
      </View>
      </SafeAreaView>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default PostPageA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  buttonAlignment:{
    flexDirection:'row',
    marginTop: 20,
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