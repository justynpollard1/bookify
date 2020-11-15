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
  TouchableOpacity
} from 'react-native';
import { PRIMARY_COLOR, LIGHT_GREY } from "../../constants/colors";

import FnGImageCarousel from '../../components/Carousel/FnGImageCarousel'
import FnGShortTextBox from '../../components/TextBoxes/FnGShortTextBox'
import FnGButton from '../../components/Buttons/FnGButton'

const defaultBookStyles = [{"id": 1, "style": "Hardcover"}, {"id": 2, "style": "Paperback"}]
const defaultBookCondition = [{"id": 1, "condition": "Poor"}, {"id": 2, "condition": "Fair"}, {"id": 3, "condition": "Good"}]

const  PostPageB = () =>  {
  const [bookPrice, setBookPrice] = useState()
  const [bookCourseNumber, setBookCourseNumber] = useState()
  const [bookStyle, setBookStyle] = useState()
  const [bookCondition, setBookCondition] = useState()
  const [keyboardAvoider, setKeyboardAvoider] = useState(false)
  
  return (
    <KeyboardAvoidingView 
    
      behavior="position" 
      enabled={keyboardAvoider}
      >
      <FnGImageCarousel></FnGImageCarousel>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
        <SafeAreaView style={styles.container}>

        <Text>What is the kind of the book?</Text>
        <View style={styles.defaultBookViewStyle}>
          <TouchableOpacity style={styles.defaultBookTouchableOpacityStyle}>
            <Text style={styles.defaultBookTextStyle}>{defaultBookStyles[0].style}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.defaultBookTouchableOpacityStyle}>
            <Text style={styles.defaultBookTextStyle}>{defaultBookStyles[1].style}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.shortTextBoxAlignment}>
          <FnGShortTextBox
            label="Price"
            placeholder="Price"
            onChangeText={(val) => setBookPrice}
            onFocus={() => setKeyboardAvoider(true)}>
          </FnGShortTextBox>
          
          <FnGShortTextBox
            label="Course"
            placeholder="CMPT260"
            onChangeText={(val) => setBookCourseNumber}
            onFocus={() => setKeyboardAvoider(true)}>
          </FnGShortTextBox>
        </View>

        
        <View style={styles.buttonAlignment}>
          
          <FnGButton 
            text="Previous" 
            onPress={ () => Alert.alert('Previous pressed')}
            buttonStyle="primary">
          </FnGButton>

          <FnGButton 
            text="Post" 
            onPress={() => Alert.alert('Post Pressed')} 
            buttonStyle="filled">
          </FnGButton>
        </View>
      </SafeAreaView>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default PostPageB;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  buttonAlignment:{
    flexDirection:'row',
    marginTop: 20,
  },

  shortTextBoxAlignment:{
    flexDirection:'row',
  },

  defaultBookViewStyle:{
    flexDirection:'row',
    
  },

  defaultBookTouchableOpacityStyle:{
    borderWidth: 1,
    borderRadius: 5,
    width: 173,
    height: 40,
    borderColor: '#676767',
    marginBottom: 20
  },

  defaultBookTextStyle:{
    color: LIGHT_GREY,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 16
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