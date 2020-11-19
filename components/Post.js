import React from 'react';

import { 
  StyleSheet, 
  SafeAreaView,
  Modal,
  useState} from 'react-native';
import PostBookView from '../views/PostView/PostPageA'
import PostBookViewB from '../views/PostView/PostPageB'
import ModalPostBookView from '../views/PostView/ModalPostBook'
import FnGPostABookButton from '../components/Buttons/FnGPostABookButton'
import PostABookStack from '../views/PostView/PostABookStack'
const  Post = () =>  {

  

  return (
    <SafeAreaView style={styles.container}>
      <ModalPostBookView></ModalPostBookView>
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