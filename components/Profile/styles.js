import styled from "styled-components/native";
import { Image } from "react-native";
import { Button } from "native-base";

export const ProfileImage = styled(Image)`
  color: #c1b3d1;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 90px;
  height: 90px;
  border-radius: 50;
`;

export const Name = styled.View`
  flex-direction: row;
  margin-bottom: 3px;
  color: white;
`;

export const FirstName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const LastName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const UserName = styled.Text`
  font-size: 15px;
  color: white;
  padding: 1px;
`;

export const Bio = styled.Text`
  font-size: 15px;
  font-size: 15px;
  color: white;
  padding: 5px;
  margin-bottom: 8px;
`;

export const UserInfo = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1;
`;

export const Joined = styled.Text`
  font-size: 15px;
  color: white;
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

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
`;
