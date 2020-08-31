import styled from "styled-components/native";
import { Button } from "native-base";
import { Icon } from "native-base";

export const AddButtonStyled = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: blue;
  margin-top: 30px;
`;

export const AddButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
`;

export const EditProfile = styled(Button)`
  margin-top: 20px;
  margin-left: 275px;
  width: 50;
  height: 50;
  border-radius: 50;
`;

export const SignoutStyledButton = styled(Icon)`
  margin-left: 20px;
  color: red;
`;
