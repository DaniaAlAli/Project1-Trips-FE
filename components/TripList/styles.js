import styled from "styled-components/native";
import { Image } from "react-native";
import { Card, Content } from "native-base";
import { Icon, View } from "native-base";

export const DeleteTrip = styled(Icon)`
  color: red;
  position: absolute;
  right: 10px;
  bottom: 3px;
`;

export const ButtonWrapper = styled(View)`
  margin-top: 33px;
  display: flex;
  flex-direction: row;
`;

export const AddButton = styled.TouchableOpacity`
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

export const TripItemStyled = styled.Text`
  color: blue;
  font-size: 18;
`;

export const StyledImage = styled(Image)`
  height: 200;
  flex: 1;
`;

export const StyledCard = styled(Card)`
  border-radius: 0;
`;

export const StyledContent = styled(Content)`
  border-radius: 25;
`;

export const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: auto;

  padding-right: auto;
`;

export const CreatedAt = styled.Text`
  color: grey;
  text-align: right;
  margin-right: 10px;
`;

export const OwnerOfTrip = styled.Text`
  color: #ffbe0b;
  font-weight: bold;
  text-align: center;
  padding-bottom: 1px;
  font-size: 20px;
`;
