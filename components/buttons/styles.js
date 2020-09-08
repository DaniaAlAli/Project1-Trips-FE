import styled from "styled-components/native";
import { Button } from "native-base";
import { Icon } from "native-base";

export const AddButtonStyled = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: 275px;
  width: 50;
  height: 50;
  display: flex;
  border-radius: 50;
  background-color: black;
`;
export const UpdateButtonStyled = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: white;
  display: flex;
  color: black;
`;

export const AddButtonText = styled.Text`
  color: white;
  align-self: center;
  padding: 5px;
  font-size: 30px;
`;
export const UpdateButtonText = styled.Text`
  font-weight: bold;
  position: absolute;
  left: 10px;
  bottom: 8px;
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
