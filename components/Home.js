import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


const Home = () =>  {
    return (
      <View style={styles.container}>
            <Text> Home </Text>
    </View>
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

  export default Home;


//   <FlatList
//   data={posts}
//   renderItem={({ item }) => <CustomCard title={item.title}  money={item.money} image={item.image} />}
//   keyExtractor={item => item.id.toString()}
// />


  // const [posts, setPosts] = useState([]);
 
  // useEffect(() => {
  //   return db.collection('posts').onSnapshot((snapshot) => {
  //     const postData = [];
  //     snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
  //     setPosts(postData);
  //   });
  // }, []);
  

  // const [card, setCard] = useState([
  //   {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', image: `'../assets/buyAndSell.jpg'`, id: 1},
  //   {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', image: `'../assets/buyAndSell.jpg'`, id: 2},
  //   {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', image: `'../assets/buyAndSell.jpg'`, id: 3},
  //   {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', image: `'../assets/buyAndSell.jpg'`, id: 4},
  //   {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', image: `'../assets/buyAndSell.jpg'`, id: 5},
  // ])
  