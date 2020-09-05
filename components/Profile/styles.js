import styled from "styled-components/native";
import { Image } from "react-native";
import { Button } from "native-base";

export const ProfileImage = styled(Image)`
  margin-bottom: 20px;
  margin-left: 10px;
  width: 70;
  height: 70;
  border-radius: 50;
  /* background-color: red; */
`;

export const Name = styled.View`
  flex-direction: row;
`;

export const FirstName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

export const LastName = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const UserName = styled.Text`
  font-size: 15px;
  color: grey;
  padding: 1px;
  margin-left: 10px;
`;

export const Bio = styled.Text`
  font-size: 15px;
  margin-left: 5px;
  margin-top: 8px;
  margin-bottom: 10px;
`;

export const UserInfo = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1;
  background-color: white;
`;

export const Joined = styled.Text`
  font-size: 15px;
  color: grey;
  margin-left: 10px;
  margin-top: 2px;
  /* margin-bottom: 10px; */
`;

export const DiscoverButton = styled(Button)`
  margin: 10px;
  width: 100;
  height: 50;
  border-radius: 10;
  align-self: center;
  margin-top: 10px;
  background-color: black;
`;

export const FavoriteTripTitle = styled.Text`
  align-items: center;
  align-self: stretch;
  font-weight: bold;
  font-size: 20px;
  margin: auto;
  padding: 15px;
`;

export const MyTripStyle = styled.Text`
  align-items: center;
  align-self: stretch;
  font-weight: bold;
  font-size: 20px;
  margin: auto;
  padding: 15px;
`;
