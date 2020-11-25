import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    Dimensions} from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function FnGAddBookImageButton(props){
    
    const [image, setImage] = useState(null);
    const [imageB, setImageB] = useState(null)
    const [imageC, setImageC] = useState(null)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to add images.');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

    return(
            <TouchableOpacity onPress={pickImage} style={styles.touchableOpacityStyle}>
                <Image>{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}</Image>
                <Text style={styles.textStyle}>Tap to add images</Text>
                
            </TouchableOpacity>
    )
}

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    touchableOpacityStyle:{
        width: windowWidth,
        height: 200,
        backgroundColor: '#F3F3F3',
        marginBottom: 20,
        margin: 'auto'
    },

    textStyle:{
        textAlign: "center",
        paddingTop: 100,
        fontSize: 17
    }
})