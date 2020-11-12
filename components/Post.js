import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  TextInput,
  Button,
  Alert} from 'react-native';
import FnGButtonPrimary from './Buttons/FnGButtonPrimary'

const  Post = () =>  {
  return (
    <SafeAreaView style={styles.container}>
      <View className="add-image-view">
          <Text> Tap to Add Image </Text>
      </View>
      <View className="book-name-view">
        <Text>Book's Name</Text>
      </View>
      <View className="author-name-view">
        <Text>Author's Name</Text>
      </View>
      <View className="book-description-view">
        <Text>Book's Description</Text>
      </View>
      <FnGButtonPrimary text="Next" onPress={() => Alert.alert('Pressed')}></FnGButtonPrimary>
          
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