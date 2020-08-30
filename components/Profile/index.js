import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { observer } from "mobx-react";
import moment from "moment";
import { Text } from "native-base";

//Components
import UserTripList from "../UserTripList";

// Store
import authStore from "../../stores/authStore";

//Styles
import {
  Bio,
  Joined,
  FirstName,
  LastName,
  Name,
  ProfileImage,
  UserInfo,
  UserName,
  DiscoverButton,
} from "./styles";

const ProfileList = ({ navigation }) => {
  // const user = authStore.user;
  // console.log("ProfileList -> user", user);
  // const profile = authStore.user.profile;
  // console.log("ProfileList -> profile", profile);

  // const user = authStore.user.id;
  // const profile = authStore.user.profile.userId;
  // console.log("ProfileList -> profilebelongstouser", profile);
  // console.log("ProfileList -> userhasid", user);

  // console.log("ProfileList -> user", user);

  const user = authStore.user;
  const profile = authStore.user.profile;

  return (
    <SafeAreaView>
      <ScrollView>
        <UserInfo>
          <ProfileImage
            source={
              profile.image ?? {
                uri:
                  "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png",
              }
            }
          />
          <Name>
            <FirstName>{user.firstName}</FirstName>
            <LastName>{user.lastName}</LastName>
          </Name>
          <UserName>@{user.username}</UserName>
          <Joined>Traveling since {moment(user.createdAt).format("yy")}</Joined>
          <Bio>{profile.bio}</Bio>
        </UserInfo>
        <DiscoverButton block onPress={() => navigation.navigate("Trips")}>
          <Text>Discover</Text>
        </DiscoverButton>
        <UserTripList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(ProfileList);
