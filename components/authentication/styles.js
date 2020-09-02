//Styled components
import styled from "styled-components/native";
import { Button, Form } from "native-base";

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;s
`;

export const FormStyled = styled(Form)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
`;

export const CreateNewAccountStyled = styled(Button)`
  align-self: center;
  margin-bottom: 40%;
  margin-top: 3px;
  background-color: black;
`;

export const SignUpButtonStyled = styled(Button)`
  align-self: center;
  margin-top: 10px;
  background-color: black;
`;
