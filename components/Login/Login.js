import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import   {PRIMARY_COLOR}  from "../../constants/colors"

const StyledView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  flex-direction: column;
  align-items:  center;
  justify-content: center;

  
  
`

const  StyledHeaderText = styled.Text`
    width: 236px;
    height: 78px;
    font-style :  normal;
    font-weight:  bold;
    font-size: 64px;
    color:  ${PRIMARY_COLOR};
    padding-bottom: 180px;

`

const  StyledTextInput =  styled.TextInput`
    width: 300px;
    height:  50px;
    border: 1px solid #676767;
    border-radius: 20px;
   margin-bottom: 28px;
`
const  StyledButton = styled.TouchableOpacity`
    width:  122px;
    height: 40px;
    border-radius: 20px;
    background-color: ${PRIMARY_COLOR};
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.25);
    margin-bottom: 28px;

`

const SingUpTextContainer =  styled.View`
width: 103px;
height: 42px;

font-style: normal;
font-weight: normal;
display: flex;
align-items: center;
text-align: center;
text-transform: lowercase;


`
const SignUpText = styled.Text`
    font-size: 14px;
    color: ${PRIMARY_COLOR};
    font-weight: bold;
`
const NewToBookfiyText  = styled.Text`
    font-size: 14px;
    color: #676767;
`

const StyledButtonText = styled.Text`
    width:  57px;
    height:  25px;
    color:   #FFFFFF;
    font-size: 16px;
    font-weight: bold;
`

const LineView = styled.View`
position: absolute;
width: 952.96px;
height: 390.73px;
left: 240px;
top: 815.4px;

border: 2px solid #66BEFD;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
border-radius: 40px;
transform: rotate(-65.25deg);

`

const Login = () => {
    return (
        
       <StyledView>
          
           
          <StyledHeaderText> bookify </StyledHeaderText>
          <StyledTextInput
          placeholder="email"
          /> 
          <StyledTextInput
          placeholder="password"

          />
          <StyledButton> 
            <StyledButtonText> sign in </StyledButtonText>
          </StyledButton>

          <SingUpTextContainer>
              <NewToBookfiyText>new to bookify? </NewToBookfiyText>
              <SignUpText> sign up</SignUpText>

          </SingUpTextContainer>
          
       </StyledView>
    

    )
}

export default Login

const styles = StyleSheet.create({})
