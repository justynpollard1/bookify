import React from 'react'
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native'



export default function FnGImageCarousel(){
    return(
            <View style={styles.scrollViewStyle}>
            <ScrollView
                
                horizontal
              
                showsHorizontalScrollIndicator={false}
                bounces={false}>  
            </ScrollView>
            </View>
        
    )
}

const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    scrollViewStyle:{
        height: 200,
        width: windowWidth,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 20
    },
})