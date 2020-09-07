import styled from "styled-components/native";
import { Image } from "react-native";
import { Button } from "native-base";

export const ProfileImage = styled(Image)`
  margin-top: 100px;
  margin-bottom: 20px;
  margin-left: 10px;
  width: 50;
  height: 50;
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
  color: white;
  position: absolute;
  left: 60px;
  bottom: 40;
`;

export const LastName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  position: absolute;
  left: 80px;
  bottom: 20;
`;

export const UserName = styled.Text`
  font-size: 22px;
  color: grey;
  padding: 1px;
  margin-left: 10px;
  position: absolute;
  left: 150px;
  top: 30px;
`;

export const Bio = styled.Text`
  font-size: 15px;
  margin-left: 5px;
  margin-top: 8px;
  margin-bottom: 10px;
  color: grey;
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

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
