import styled from "styled-components/native";
import { Button } from "native-base";
import { Icon } from "native-base";

export const AddButtonStyled = styled.TouchableOpacity`
  margin: 10px;
  width: 100;
  height: 50;
  border-radius: 10;
  align-self: center;
  margin-top: 10px;
  background-color: black;
`;
export const UpdateButtonStyled = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: white;
  color: black;
`;

export const AddButtonText = styled.Text`
  color: white;
  align-self: center;
  padding-top: 15px;
  font-size: 15px;
`;
export const UpdateButtonText = styled.Text`
  font-weight: bold;
  padding-bottom: 0px;
  padding-left: 5px;
`;

export const EditProfile = styled(Button)`
  margin-top: 20px;
  margin-left: 275px;
  width: 50;
  height: 50;
  border-radius: 50;
  background-color: black;
`;

export const SignoutStyledButton = styled(Icon)`
  margin-left: 20px;
  color: red;
`;
