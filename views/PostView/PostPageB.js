import React, {useState} from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  Alert,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity
} from 'react-native';
import { PRIMARY_COLOR, LIGHT_GREY } from "../../constants/colors";

import FnGImageCarousel from '../../components/Carousel/FnGImageCarousel'
import FnGShortTextBox from '../../components/TextBoxes/FnGShortTextBox'
import FnGButton from '../../components/Buttons/FnGButton'

const defaultBookStyles = [{"id": 1, "style": "Hardcover"}, {"id": 2, "style": "Paperback"}]
const defaultBookCondition = [{"id": 1, "condition": "Poor"}, {"id": 2, "condition": "Fair"}, {"id": 3, "condition": "Good"}]

const  PostPageB = (props) =>  {
  const [bookPrice, setBookPrice] = useState()
  const [bookCourseNumber, setBookCourseNumber] = useState()
  const [bookStyle, setBookStyle] = useState()
  const [bookCondition, setBookCondition] = useState()
  const [keyboardAvoider, setKeyboardAvoider] = useState(false)

  const [hardcoverSelected, setHardcoverSelected] = useState(false)
  const [paperbackSelected, setPaperBackSelected] = useState(false)

  const [poorConditionSelected, setPoorCondition] = useState(false)
  const [fairConditionSelected, setFairCondition] = useState(false)
  const [goodConditionSelected, setGoodCondition] = useState(false)

  var userChoiceStyler = { 
    bookCoverStyle: {
      hardCover: {style: hardcoverSelected ? styles.pressedHardcoverStyle : styles.hardcoverTouchableOpacityStyle},
      paperBack: {style: paperbackSelected ? styles.presseedPaerbackStyle : styles.paperbackTouchableOpacityStyle},
      hardCoverText: { style: hardcoverSelected ? styles.pressedFontStyle : styles.defaultBookTextStyle},
      paperBackText: { style: paperbackSelected ? styles.pressedFontStyle : styles.defaultBookTextStyle},
      },

    conditionOfBook: {
      poor: {style: poorConditionSelected ? styles.pressedPoorConditionStyle : styles.poorConditionTouchableOpacityStyle},
      fair: {style: fairConditionSelected ? styles.pressedFairConditionStyle : styles.fairConditionTouchableOpacityStyle},
      good: {style: goodConditionSelected ? styles.pressedGoodConditionStyle : styles.goodConditionTouchableOpacityStyle},
      poorText: {style: poorConditionSelected ? styles.pressedFontStyle : styles.defaultBookTextStyle},
      fairText: {style: fairConditionSelected ? styles.pressedFontStyle : styles.defaultBookTextStyle},
      goodText: {style: goodConditionSelected ? styles.pressedFontStyle : styles.defaultBookTextStyle},
    },
}

  return (
    <KeyboardAvoidingView 
    
      behavior="position" 
      enabled={() => {keyboardAvoider; pressedStyler}}
      >
      <FnGImageCarousel></FnGImageCarousel>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
        <SafeAreaView style={styles.container}>

        <View className="book-kind">
          <Text style={styles.textLabelStyle}>What is the kind of your book?</Text>
          <View style={styles.defaultBookViewStyle}>
            <TouchableOpacity 
              {...userChoiceStyler.bookCoverStyle.hardCover}
              onPress={() => {
                setBookStyle(defaultBookStyles[0].style)
                setHardcoverSelected(true)
                setPaperBackSelected(false)}}
              >
              <Text {...userChoiceStyler.bookCoverStyle.hardCoverText}>{defaultBookStyles[0].style}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              {...userChoiceStyler.bookCoverStyle.paperBack}
              onPress={() => {
                setBookStyle(defaultBookStyles[1].style)
                setHardcoverSelected(false)
                setPaperBackSelected(true)}}>
              <Text {...userChoiceStyler.bookCoverStyle.paperBackText}>{defaultBookStyles[1].style}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="price-and-course" style={styles.shortTextBoxAlignment} >
          <FnGShortTextBox
            label="Price"
            placeholder="Price"
            onChangeText={(val) => setBookPrice(val)}
            onFocus={() => setKeyboardAvoider(true)}
            keyboardType='numeric'>
            
          </FnGShortTextBox>
          
          <FnGShortTextBox
            label="Course"
            placeholder="CMPT260"
            onChangeText={(val) => setBookCourseNumber(val)}
            onFocus={() => setKeyboardAvoider(true)}
            keyboardType='default'>
          </FnGShortTextBox>
        </View>
        
        <View className="book-condition">
          <Text style={styles.textLabelStyle}>What is the condition of your book?</Text>
          <View style={styles.defalutBookConditionViewStyle}>
            <TouchableOpacity 
              {...userChoiceStyler.conditionOfBook.poor}
              onPress={() => {
                setBookCondition(defaultBookCondition[0].condition);
                setPoorCondition(true);
                setFairCondition(false)
                setGoodCondition(false)
              }}>
              <Text {...userChoiceStyler.conditionOfBook.poorText}>{defaultBookCondition[0].condition}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="fair-condition"
              {...userChoiceStyler.conditionOfBook.fair}
              onPress={() => {
                setBookCondition(defaultBookCondition[1].condition);
                setPoorCondition(false);
                setFairCondition(true)
                setGoodCondition(false)
              }}>
              <Text {...userChoiceStyler.conditionOfBook.fairText}>{defaultBookCondition[1].condition}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="good-condition"
              {...userChoiceStyler.conditionOfBook.good}
              onPress={() => {
                setBookCondition(defaultBookCondition[2].condition);
                setPoorCondition(false);
                setFairCondition(false)
                setGoodCondition(true)
              }}>
              <Text {...userChoiceStyler.conditionOfBook.goodText}>{defaultBookCondition[2].condition}</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.buttonAlignment}>
          
          <FnGButton 
            text="Previous" 
            onPress={ () => props.navigation.navigate("PostPageB")}
            buttonStyle="primary">
          </FnGButton>

          <FnGButton 
            text="Post" 
            onPress={() => Alert.alert('Post Pressed')} 
            buttonStyle="filled">
          </FnGButton>
        </View>
        
      </SafeAreaView>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const fngTextFontSize = 18
const fngBorderColor = '#676767'

export default PostPageB;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  buttonAlignment:{
    flexDirection:'row',
    marginTop: 20,
  },

  shortTextBoxAlignment:{
    flexDirection:'row',
  },

  defaultBookViewStyle:{
    flexDirection:'row',
    
  },

  hardcoverTouchableOpacityStyle:{
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: 180,
    height: 40,
    borderColor: fngBorderColor,
    marginBottom: 20,
  },

  pressedHardcoverStyle:{
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: 180,
    height: 40,
    borderColor: fngBorderColor,
    marginBottom: 20,
    backgroundColor: PRIMARY_COLOR,
    
  },

  paperbackTouchableOpacityStyle:{
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: 180,
    height: 40,
    borderColor: fngBorderColor,
    marginBottom: 20,
    borderLeftWidth: 0
  },

  presseedPaerbackStyle:{
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: 180,
    height: 40,
    borderColor: fngBorderColor,
    marginBottom: 20,
    borderLeftWidth: 0,
    backgroundColor: PRIMARY_COLOR
  },

  pressedFontStyle:{
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: fngTextFontSize
  },

  defaultBookTextStyle:{
    color: LIGHT_GREY,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: fngTextFontSize
  },

  textLabelStyle:{
    marginLeft: 2,
    marginBottom: 2,
    fontSize: fngTextFontSize ,
    color: fngBorderColor
  },

  defalutBookConditionViewStyle:{
    flexDirection: 'row'
  },

  poorConditionTouchableOpacityStyle:{
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: 120,
    height: 40,
    borderColor: fngBorderColor,
    marginBottom: 20,
  },

  pressedPoorConditionStyle:{
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: 120,
    height: 40,
    borderColor: fngBorderColor,
    marginBottom: 20,
    backgroundColor: PRIMARY_COLOR
  },

  fairConditionTouchableOpacityStyle:{
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 120,
    height: 40,
    borderColor: fngBorderColor,
    marginBottom: 20,
  },

  pressedFairConditionStyle:{
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 120,
    height: 40,
    borderColor: fngBorderColor,
    marginBottom: 20,
    borderLeftWidth: 0,
    backgroundColor: PRIMARY_COLOR
  },

  goodConditionTouchableOpacityStyle:{
    borderWidth: 1,
    borderLeftWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: 120,
    height: 40,
    borderColor: fngBorderColor,
    marginBottom: 20,
  },

  pressedGoodConditionStyle:{
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: 120,
    height: 40,
    borderColor: fngBorderColor,
    marginBottom: 20,
    backgroundColor: PRIMARY_COLOR
  }
});




  // post = (money, title, url) => {
  //   db.collection("posts").add({
  //     money: money,
  //     title: title,
  //     image: url
  //   }).then(ref => console.log(ref)).catch(error => console.log("an error " +  error));
  // }
  
  //   onChooseImagePress = async () => {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1
  //     });
  
  //     if(!result.cancelled) {
  //       const response = await fetch(result.uri);
  //       const blob  = await response.blob();
  //       const path = `images/testPosts${uuidv5.URL}`
  //       const storageRef = storage.ref(path);
  //     storageRef.put(blob)
  //     .then(() => console.log("Success"))
  //     .catch(err => console.log("ERROR"));
  
  //     storageRef.getDownloadURL().then(url => {
  //       this.setState({url});
  //     });
  
  //     }
  //   }