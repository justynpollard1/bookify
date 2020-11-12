import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View} from 'react-native'
import { PRIMARY_COLOR } from "../../constants/colors";

export default function FnGButtonPrimary({text, onPress}){
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
        borderRadius: 10,
        backgroundColor: PRIMARY_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    }
})