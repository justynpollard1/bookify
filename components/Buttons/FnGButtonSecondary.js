import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View} from 'react-native'
import { LIGHT_GREY } from "../../constants/colors";

export default function FnGButtonSecondary({text, onPress}){
    return(
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 5,
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderWidth: 1
        
    },
    buttonText:{
        color: LIGHT_GREY,
        fontWeight: 'normal',
        fontSize: 18,
        textAlign: 'center'
    }
})