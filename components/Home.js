import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import CustomCard from './CustomCard'
import { SearchBar } from 'react-native-elements';
import {db, storage} from  "../firebase/Fire"


const empty = []

const getDocs = () => {
  const postData = []
 db.collection("posts").get().then(snapshot => {
  
  snapshot.forEach(doc => {
    postData.push({...doc.data(), id: doc.id})
    console.log(postData);
  })
}).catch(err => console.log("Could not get documents", err));
return postData;

}

// const  getMarker = () => {
//   const snapshot =  db.collection('posts').get()
//   return snapshot.docs.map(doc => doc.data());
// }

const Home = () =>  {
  
  const [posts, setPosts] = useState();
 
  useEffect(() => {
    return db.collection('posts').onSnapshot((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      console.log(postData);  // <------
      setPosts(postData);
    });
  }, []);
  

  const [card, setCard] = useState([
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', image: `'../assets/buyAndSell.jpg'`, id: 1},
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', image: `'../assets/buyAndSell.jpg'`, id: 2},
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', image: `'../assets/buyAndSell.jpg'`, id: 3},
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', image: `'../assets/buyAndSell.jpg'`, id: 4},
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', image: `'../assets/buyAndSell.jpg'`, id: 5},
  ])
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        data={posts}
        renderItem={({ item }) => <CustomCard title={item.title}  money={item.money} image={item.image} />}
        keyExtractor={item => item.id.toString()}
      />
        
    </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: '#E5E5E5',
      justifyContent: 'center',
    },
  });

  export default Home;