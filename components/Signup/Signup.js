import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { PRIMARY_COLOR } from "../../constants/colors";
import * as Google from 'expo-google-app-auth';
import firebase from '../..firebase/firebase.js';

var provider = new firebase.auth.GoogleAuthProvider()
firebase.auth().languageCode = 'pt';

export default class Signup extends React.Component{
  async signInWithGoogleAsync() {
    const { type, accessToken, user } = await Google.logInAsync({
      iosClientId: '876521445865-qlbtfahan7htc9jsvj46smorp45jpdf6.apps.googleusercontent.com',
      scopes:['profile', 'email']});

    if (type === 'success') {
      user1 = user;
    }
  }


  render(){
    const StyledView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  flex-direction: column;
`;

const StyledHederTextView = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #676767;
`;

const StyledHeaderText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  color: ${PRIMARY_COLOR};
`;

const SignUpSocialMedia = styled.TouchableOpacity`
  border: 1px solid #66befd;
  border-radius: 5px;
  width: 155px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const SignUpGoogleAndTwitterText = styled.Text`
  font-size: 12px;
  color: #676767;
`;

const StyledNameTextInput = styled.TextInput`
  width: 150px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #676767;
  border-radius: 5px;
  border: 1px solid #676767;
`;

const StyledTextInput = styled.TextInput`
  width: 330px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #676767;
  border-radius: 5px;
  border: 1px solid #676767;
`;
const InputText = styled.Text`
  font-size: 12px;
  color: #676767;
`;

const TextTitle = styled.Text`
  font-size: 12px;
  color: #676767;
  font-weight: bold;
  padding-bottom: 5px;
`;

const LineView = styled.View`
  width: 150px;
  border: 0.5px solid #676767;
`;

const LineViewText = styled.Text`
  font-size: 12px;
  color: #676767;
`;

const TitleContainer = styled.View`
  flex-direction: column;
  padding-left: 32px;
  padding-top: 72px;
  padding-bottom: 72px;
`;

const SignUpButtonContainer = styled.View`
  flex-direction: column;
  padding-left: 32px;
  padding-bottom: 32px;
`;

const SocialMediaContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 32px;
`;

const LineContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TextInputContainer = styled.View`
  flex-direction: column;
  padding-left: 32px;
`;
const NameContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const StyledButton = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  background-color: ${PRIMARY_COLOR};
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 28px;
`;

const ButtonText = styled.Text`
  font-size: 12px;
  color: white;
`;
const StyledButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 48px;
  margin-top: 20px;
`;
const SignInLinkContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const SignInText = styled.Text`
  font-size: 12px;
  color: ${PRIMARY_COLOR};
  font-weight: bold;
`;
    return (
      <StyledView>
      <TitleContainer>
        <StyledHederTextView>
          Let us help you find your next book
        </StyledHederTextView>
        <StyledHeaderText>Sign Up!</StyledHeaderText>
      </TitleContainer>

      <SignUpButtonContainer>
        <SocialMediaContainer>
          <SignUpSocialMedia>
            <SignUpGoogleAndTwitterText onPress={() => this.signInWithGoogleAsync()}>
              {" "}Sign in with Google{" "}
            </SignUpGoogleAndTwitterText>
          </SignUpSocialMedia>
          <SignUpSocialMedia style={{ marginRight: 32 }}>
            <SignUpGoogleAndTwitterText >
              {" "}
              Sign in with Twitter{" "}
            </SignUpGoogleAndTwitterText>
          </SignUpSocialMedia>
        </SocialMediaContainer>

        <LineContainer>
          <LineView></LineView>

          <LineView style={{ marginRight: 32 }}></LineView>
        </LineContainer>
      </SignUpButtonContainer>

      <TextInputContainer>
        <NameContainer>
          <View>
            <TextTitle>First Name</TextTitle>
            <StyledNameTextInput> </StyledNameTextInput>
          </View>

          <View style={{ marginRight: 32 }}>
            <TextTitle>Last Name</TextTitle>
            <StyledNameTextInput> </StyledNameTextInput>
          </View>
        </NameContainer>

        <View style={{ paddingBottom: 10 }}>
          <TextTitle> Username</TextTitle>
          <StyledTextInput></StyledTextInput>
        </View>

        <View style={{ paddingBottom: 10 }}>
          <TextTitle> Email</TextTitle>
          <StyledTextInput></StyledTextInput>
        </View>
        <View style={{ paddingBottom: 10 }}>
          <TextTitle> Password</TextTitle>
          <StyledTextInput></StyledTextInput>
        </View>
      </TextInputContainer>

      <StyledButtonContainer>
        <StyledButton>
          <ButtonText> Sign Up</ButtonText>
        </StyledButton>
      </StyledButtonContainer>

      <SignInLinkContainer>
        <InputText> Already have an account?</InputText>
        <SignInText onPress={() => props.navigation.navigate("Login")}>
          Sign In!
        </SignInText>
      </SignInLinkContainer>
    </StyledView>
    );
  }
}
