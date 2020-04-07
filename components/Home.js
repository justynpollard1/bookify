import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import CustomCard from './CustomCard'
import { SearchBar } from 'react-native-elements';

const Home = () =>  {

  const [card, setCard] = useState([
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', url: `'../assets/buyAndSell.jpg'`, id: 1},
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', url: `'../assets/buyAndSell.jpg'`, id: 2},
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', url: `'../assets/buyAndSell.jpg'`, id: 3},
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', url: `'../assets/buyAndSell.jpg'`, id: 4},
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', url: `'../assets/buyAndSell.jpg'`, id: 5},
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', url: `'../assets/buyAndSell.jpg'`, id: 6},
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', url: `'../assets/buyAndSell.jpg'`, id: 7},
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', url: `'../assets/buyAndSell.jpg'`, id: 8},
    {title: 'List, More, Sell More', small_text: '5mins ago',  money: '$5,000', url: `'../assets/buyAndSell.jpg'`, id: 9},
  ])
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        data={card}
        renderItem={({ item }) => <CustomCard title={item.title} small_text = {item.small_text} money={item.money} />}
        keyExtractor={item => item.id}
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