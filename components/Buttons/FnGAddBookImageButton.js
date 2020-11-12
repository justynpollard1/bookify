import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    Dimensions} from 'react-native'

export default function FnGAddBookImageButton({onPress}){
    return(
        <View>
            <TouchableOpacity onPress={onPress} style={styles.touchableOpacityStyle}>
                <Image></Image>
                <Text style={styles.textStyle}>Tap to add images</Text>
            
            </TouchableOpacity>
        </View>
    )
}

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    touchableOpacityStyle:{
        width: windowWidth,
        height: 200,
        backgroundColor: '#F3F3F3',
        marginBottom: 20
    },

    textStyle:{
        textAlign: "center",
        paddingTop: 100,
        fontSize: 17
    }
})