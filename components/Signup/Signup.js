import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { PRIMARY_COLOR } from "../../constants/colors";
import  {AuthContext} from '../../context/Auth'

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

const Signup = (props) => {
  const { signup } = React.useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: ""
  })

  const handleChange = (inputName, inputValue) => {
    
    setValues(values => ({
      ...values,
      [inputName]: inputValue
  }));
  }
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
            <SignUpGoogleAndTwitterText>
              {" "}
              Sign up with Google{" "}
            </SignUpGoogleAndTwitterText>
          </SignUpSocialMedia>
          <SignUpSocialMedia style={{ marginRight: 32 }}>
            <SignUpGoogleAndTwitterText>
              {" "}
              Sign up with Twitter{" "}
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
            <StyledNameTextInput
            value={values.firstName}
            onChangeText={text => handleChange('firstName', text)}
            > </StyledNameTextInput>
          </View>

          <View style={{ marginRight: 32 }}>
            <TextTitle>Last Name</TextTitle>
            <StyledNameTextInput 
            value={values.lastName}
            onChangeText={text => handleChange('lastName', text)}
            > </StyledNameTextInput>
          </View>
        </NameContainer>

        <View style={{ paddingBottom: 10 }}>
          <TextTitle> Username</TextTitle>
          <StyledTextInput value={values.userName}
            onChangeText={text => handleChange('userName', text)}></StyledTextInput>
        </View>

        <View style={{ paddingBottom: 10 }}>
          <TextTitle> Email</TextTitle>
          <StyledTextInput
           autoCapitalize='none'
           autoCorrect={false}
           keyboardType='email-address' 
           value={values.email}
           onChangeText={text => handleChange('email', text)}
          ></StyledTextInput>
        </View>
        <View style={{ paddingBottom: 10 }}>
          <TextTitle> Password</TextTitle>
          <StyledTextInput 
           passwordRules
           secureTextEntry={true}
           value={values.password}
           onChangeText={text => handleChange('password', text)}
          ></StyledTextInput>
        </View>
      </TextInputContainer>

      <StyledButtonContainer>
        <StyledButton  onPress={() => signup(values)}>
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
};

export default Signup;
