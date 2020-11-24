import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View} from 'react-native'
import { PRIMARY_COLOR, LIGHT_GREY } from "../../constants/colors";

export default function FnGButton(props){
    if (props.buttonStyle === "primary"){
        return(
            <TouchableOpacity 
                onPress={props.onPress} 
                style={styles.touchableOpacityStyle}
                >
                <View style={[styles.button, styles.primaryBorderColor]}>
                    <Text style={[styles.buttonText, styles.primaryFontColor]}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    else if (props.buttonStyle === "secondary"){
        return(
            <TouchableOpacity 
                onPress={props.onPress} 
                style={styles.touchableOpacityStyle}
                >
                <View style={[styles.button, styles.secondaryBorderColor]}>
                    <Text style={[styles.buttonText, styles.secondaryFontColor]}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    else if (props.buttonStyle === "filled"){
        return(
            <TouchableOpacity 
                onPress={props.onPress} 
                style={styles.touchableOpacityStyle}
                >
                <View style={[styles.filledBackgroundButton]}>
                    <Text style={[styles.buttonText, styles.filledFontColor]}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    else if (props.buttonStyle === "close"){
        return(
            <TouchableOpacity 
                onPress={props.onPress} 
                style={styles.touchableOpacityStyle}
                >
                <View style={[styles.closeButtonStyle]}>
                    <Text style={[ styles.closeTextButtonStyle]}>X</Text>
                </View>
            </TouchableOpacity>
        )
    }
    else if (props.buttonStyle === "clear"){
        return(
            <TouchableOpacity 
                onPress={props.onPress} 
                style={styles.clearTouchableOpacityStyle}
                >
                <View style={[styles.clearButtonStyle]}>
                    <Text style={[ styles.clearTextButtonStyle]}>X</Text>
                </View>
            </TouchableOpacity>
        )
    }
    else{
        return(
            <View>
                <Text>Please add buttonStyle prop</Text>
                <Text>buttonStyle: 'primary', 'secondary', 'filled', 'close', 'clear'</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    touchableOpacityStyle:{
        marginLeft: 25,
        marginRight: 25,
    },

    button:{
        borderRadius: 5,
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderWidth: 1,
        width: 122,
        height: 40,
    },

    buttonText:{
        fontWeight: 'normal',
        fontSize: 18,
        textAlign: 'center'
    },

    primaryFontColor:{
        color: PRIMARY_COLOR
    },

    primaryBorderColor:{
        borderColor: PRIMARY_COLOR
    },

    secondaryFontColor:{
        color: LIGHT_GREY,   
    },

    secondaryBorderColor:{
        borderColor: LIGHT_GREY,
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
    },

    closeButtonStyle:{
        backgroundColor: '#C12525',
        borderRadius: 20,
        width: 50,
        height: 50,
        
        shadowOpacity: 0.50,
        shadowRadius: 5.0,
        
        elevation: 5,
    },

    closeTextButtonStyle:{
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center',
        paddingTop: 14,
        fontSize: 18,
    },

    clearButtonStyle:{
        backgroundColor: 'grey',
        borderRadius: 200,
        width: 20,
        height: 20,
    },

    clearTextButtonStyle:{
        color: 'white',
        textAlign: 'center',
        paddingTop: 1
    },

    clearTouchableOpacityStyle:{
        marginTop: 1,
        marginBottom: 1,
        
    }
    

})