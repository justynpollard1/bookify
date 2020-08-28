import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { PRIMARY_COLOR } from "../../constants/colors";

const StyledView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  flex-direction: column;
  justify-content: center;
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

const TitleContainer = styled.View`
  flex-direction: column;
  padding-left: 32px;
  padding-bottom: 32px;
`;

const TextInputContainer = styled.View`
  flex-direction: column;
  padding-left: 32px;
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

const Login = (props) => {
  return (
    <StyledView>
      <TitleContainer>
        <StyledHederTextView>Welcome Back.</StyledHederTextView>
        <StyledHeaderText>Sign In!</StyledHeaderText>
      </TitleContainer>

      <TextInputContainer>
        <View style={{ paddingBottom: 10 }}>
          <TextTitle> Username</TextTitle>
          <StyledTextInput></StyledTextInput>
        </View>

        <View style={{ paddingBottom: 10 }}>
          <TextTitle> Password</TextTitle>
          <StyledTextInput></StyledTextInput>
        </View>
      </TextInputContainer>

      <StyledButtonContainer>
        <StyledButton>
          <ButtonText> Sign In</ButtonText>
        </StyledButton>
      </StyledButtonContainer>

      <SignInLinkContainer>
        <InputText> Don't have an account?</InputText>
        <SignInText onPress={() => props.navigation.navigate("SignUp")}>
          Sign Up!
        </SignInText>
      </SignInLinkContainer>
    </StyledView>
  );
};

export default Login;

const styles = StyleSheet.create({});
