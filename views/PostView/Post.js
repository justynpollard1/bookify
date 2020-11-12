import React, {useState} from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  Alert,
  Text
} from 'react-native';

import FnGTextBoxPrimary from '../../components/TextBoxes/FnGWideTextBox'
import FnGShortTextBox from '../../components/TextBoxes/FnGShortTextBox'
import FnGButton from '../../components/Buttons/FnGButton'

const  Post = () =>  {
  const [bookTitle, setBookTitle] = useState()
  const [bookAuthor, setBookAuthor] = useState()
  const [bookDescription, setBookDescription] = useState()
  
  return (
    
    <SafeAreaView style={styles.container}>
      <FnGTextBoxPrimary 
        label="What is the name of your book?" 
        placeholder="Title" 
        multiline={false}
        onChangeText={(val) => setBookTitle(val)}>
      </FnGTextBoxPrimary>

      <FnGTextBoxPrimary 
        label="Who is the author of the book?" 
        placeholder="Author" 
        multiline={false}
        onChangeText={(val) => setBookAuthor(val)}>
      </FnGTextBoxPrimary>

      <FnGTextBoxPrimary 
        label="Tell us a bit about your book." 
        placeholder="Book Description" 
        multiline={true}
        onChangeText={(val) => setBookDescription(val)}>
      </FnGTextBoxPrimary>
 
      <FnGButton 
        text="Clear All" 
        onPress={() => Alert.alert('Clear All Pressed')} 
        buttonStyle="secondary"
        style={styles.buttonAlignment}>
      </FnGButton>

      <FnGButton 
        text="Next" 
        onPress={() => Alert.alert('Next Pressed')} 
        buttonStyle="primary">
      </FnGButton>

      

    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  buttonAlignment:{
    display: "flex"
  }
});

export default Post;


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