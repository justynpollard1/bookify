import React  from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const CustomCard = props => {
    return (
    <View style={styles.container}>
        <Image style={styles.image} 
        source={{uri: props.image}}
        />
        <View style={styles.text}>
            <Text style={styles.title_text}>
                {props.title}
            </Text>
            <Text style={styles.small_text}>
                5mins ago
            </Text>
            <Text style={styles.money_text}>
                ${props.money}
            </Text>
        </View>
        <View style={styles.icon}>
        <MaterialIcons name='bookmark-border' size={24}/>
        </View>
    </View>
    )

}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 8,
      backgroundColor: '#FFFFFF',
      borderRadius: 6,
      width: 356,
      height: 122,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      
      elevation: 8,
    },
    text: {
        flexDirection: 'column',
        marginRight: 30,
    },
    title_text: {
        marginTop: 10,
        marginRight: 5,
        fontWeight: "bold",
        color: "#0468AF",
        fontSize: 18
    },
    small_text: {
        fontWeight: "500",
        fontSize: 12,
        fontStyle: "italic"
    },
    money_text: {
        fontWeight: "500",
        fontSize: 20,
        color: "#018726",
        marginTop: 30
        
    },
    image: {
        marginTop: 10,
        height: 100,
        width: 90
    },
    icon: {
        marginTop: 85,
        marginRight: 5
    }
  });

  export default CustomCard;