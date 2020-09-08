import styled from "styled-components/native";
import { Button } from "native-base";
import { Icon } from "native-base";

export const AddButtonStyled = styled.Text`
  margin-top: 20px;
  margin: auto;
  text-align: center;
  width: 150;
  height: 25;
  border: 1px;
  border-color: grey;
  margin-bottom: 5px;
  color: grey;
`;
export const UpdateButtonStyled = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: white;
  display: flex;
  color: white;
`;

export const AddButtonText = styled.Text`
  text-align: center;
`;
export const UpdateButtonText = styled.Text`
  font-weight: bold;
  position: absolute;
  border-color: white;
  color: white;
  left: 10px;
  bottom: 8px;
`;

export const EditProfile = styled.Text`
  margin-top: 20px;
  margin: auto;
  text-align: center;
  width: 150;
  height: 25;
  border: 1px;
  border-color: grey;
  margin-bottom: 5px;
  color: grey;
`;

export const SignoutStyledButton = styled(Icon)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  color: red;
`;
