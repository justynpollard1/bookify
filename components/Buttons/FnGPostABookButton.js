import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Dimensions} from 'react-native'

import { PRIMARY_COLOR, LIGHT_GREY } from "../../constants/colors";

export default function FnGPostABookButton(props){
    
    return(
        
        <TouchableOpacity onPress={props.onPress} style={styles.touchableOpacityStyle}>
            <Text style={styles.textStyle}>Create a new post</Text>
        </TouchableOpacity>
        
    )
}

const windowWidth = Dimensions.get('window').width
const touchableOpacityWidthSize = windowWidth * 0.50

const styles = StyleSheet.create({
    touchableOpacityStyle:{
        width: touchableOpacityWidthSize,
        height: touchableOpacityWidthSize,
        backgroundColor: PRIMARY_COLOR,
        marginBottom: 20,
        borderRadius: 200,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 5.00,
        
        elevation: 8,
    },

    textStyle:{
        textAlign: "center",
        paddingTop: touchableOpacityWidthSize/3,
        fontSize: 30,
        color: 'white'
    }
})