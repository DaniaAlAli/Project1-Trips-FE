//Styled components
import styled from "styled-components/native";
import { Button, Text } from "native-base";

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const SignInButtonStyled = styled(Button)`
  background-color: #74c66f;
  color: white;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 70;
  padding-right: 40px;
  padding-left: 40px;
`;

export const SignUpButtonStyled = styled(Button)`
  background-color: #74c66f;
  color: white;
  align-self: center;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 70;
  padding-right: 40px;
  padding-left: 40px;
`;

export const Title = styled.Text`
  margin-bottom: 180px;
  font-size: 35px;
  color: white;
  font-weight: bold;
  text-align: center;
  width: 60%;
  align-self: center;
`;
