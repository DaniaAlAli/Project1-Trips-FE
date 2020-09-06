import styled from "styled-components/native";
import MapView from "react-native-maps";
import { Icon } from "native-base";

export const CloseButtonStyled = styled(Icon)`
  color: black;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
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
  padding: 10px;
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

export const NameField = styled.Text`
  color: grey;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const StyledMapView = styled(MapView)`
  height: 250;
  width: 350;
  align-items: center;
  justify-content: flex-end;
  border-color: black;
  border-width: 0.5;

  /* margin-right: auto;
  margin-left: auto; */
`;

export const StyledMapTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: darkblue;
  border-bottom-color: navy;
  border-bottom-width: 1px;
`;

export const SuggestionView = styled.View`
  padding: 15px;
  background-color: white;
  border-top-width: 0.5;
  border-color: #777;
`;
export const MainText = styled.Text`
  color: #000;
`;
export const SecondaryText = styled.Text`
  color: #777;
`;
