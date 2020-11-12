import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View} from 'react-native'
import { PRIMARY_COLOR, LIGHT_GREY } from "../../constants/colors";

export default function FnGButton({text, onPress, buttonStyle}){
    if (buttonStyle === "primary"){
        return(
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText, styles.primaryFontColor}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    else if (buttonStyle === "secondary"){
        return(
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText, styles.secondaryFontColor}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    else{
        return(
            <TouchableOpacity onPress={onPress}>
                <View style={styles.filledBackgroundButton}>
                    <Text style={styles.buttonText, styles.filledFontColor}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 5,
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderWidth: 1,
        width: 122,
        height: 40
    },
    buttonText:{
        fontWeight: 'normal',
        fontSize: 18,
        textAlign: 'center'
    },

    primaryFontColor:{
        color: PRIMARY_COLOR
    },

    secondaryFontColor:{
        color: LIGHT_GREY,
        
    },

    filledBackgroundButton:{
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 5,
        paddingHorizontal: 22,
        paddingVertical: 10,
        width: 122,
        height: 40
        
    },

    filledFontColor:{
        color: "white",
    }
})