import styled from "styled-components/native";
import { Button } from "native-base";
import { Icon } from "native-base";

export const AddButtonStyled = styled.TouchableOpacity``;

export const UpdateButtonStyled = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: black;
  color: black;
`;

export const AddButtonText = styled.Text`
  color: white;
  align-self: center;

  font-size: 15px;
`;
export const UpdateButtonText = styled.Text`
  font-weight: bold;
  position: absolute;
  left: 10px;
  bottom: 8px;
  color: white;
`;

export const EditProfile = styled(Button)`
  margin-top: 20px;
  width: 100;
  height: 50;
  border-radius: 50;
  background-color: #101030;
  position: absolute;
  left: 120px;
`;

export const SignoutStyledButton = styled(Icon)`
  margin-left: 20px;

  color: red;
  position: absolute;
  right: 130px;
  top: 30px;
  /* position: absolute;
  right: 10px;
  bottom: 200px; */
`;
