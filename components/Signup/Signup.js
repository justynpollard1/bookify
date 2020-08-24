import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import   {PRIMARY_COLOR}  from "../../constants/colors"


const StyledView = styled.SafeAreaView `
    flex: 1;
    background-color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledHederTextView = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: #676767;
`

const  StyledHeaderText = styled.Text`
    font-style :  normal;
    font-weight:  bold;
    font-size: 40px;
    color:  ${PRIMARY_COLOR};
    padding-bottom: 180px;

`

const SignUpSocialMedia = styled.TouchableOpacity`
    border: 1px solid #66BEFD;
    border-radius: 5px;
    width: 155px;
    height: 40px;
    align-items: center;
    justify-content: center;

`

const SignUpTwitter = styled.TouchableOpacity`
    border: 1px solid #66BEFD;
    border-radius: 5px;
    width: 155px;
    height: 40px;
    align-items: center;
    justify-content: center;
`

const SignUpGoogleAndTwitterText = styled.Text `
    font-size: 12px;
    color: #676767;

`

const StyledNameTextInput = styled.TextInput `
    width: 150px;
    height: 40px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #676767;
    border-radius: 5px;
    border: 1px solid #676767;
`

const StyledTextInput = styled.TextInput `
    width: 330px;
    height: 40px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #676767;
    border-radius: 5px;
    border: 1px solid #676767;
`
const InputText = styled.Text`
    font-size: 12px;
    color: #676767;
` 

const TextTitle = styled.Text `
font-size: 12px;
color: #676767;
font-weight: bold;
`

const LineView = styled.View `
    width: 150px;
    border: 0.5px solid #676767;
`

const TitleContainer = styled.View `
        flex-direction: column;

`

const Signup = () => {
    return (
      <StyledView>
          <StyledHederTextView>
              Let us help you find your next book
          </StyledHederTextView>
          <StyledHeaderText>
              Sign Up!
          </StyledHeaderText>

          <LineView></LineView>



      </StyledView>
    )
}

export default Signup

const styles = StyleSheet.create({})



// <SignUpSocialMedia>
// <SignUpGoogleAndTwitterText>
//      Sign up with Google
// </SignUpGoogleAndTwitterText>
// </SignUpSocialMedia>

// <SignUpSocialMedia>
// <SignUpGoogleAndTwitterText>
//      Sign up with Google
// </SignUpGoogleAndTwitterText>
// </SignUpSocialMedia>
