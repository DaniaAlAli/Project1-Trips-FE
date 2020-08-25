import styled from "styled-components/native";

import { Icon } from "native-base";

export const CloseButtonStyled = styled(Icon)`
  color: black;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const CreateButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: navy;
  margin-top: 30px;
`;

export const CreateButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #000000aa;
`;

export const ModalView = styled.View`
  flex: 1;
  background-color: #ffffff;
  border-radius: 10;
  padding: 20px;
  margin: 50px;
`;

export const ModalTitle = styled.Text`
  color: purple;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: white;
`;

export const ModalTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: darkblue;
  border-bottom-color: navy;
  border-bottom-width: 1px;
`;
