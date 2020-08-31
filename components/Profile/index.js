import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { observer } from "mobx-react";
import moment from "moment";
import { Text, Right } from "native-base";

//Components
// import UserTripList from "../UserTripList";
import EditButton from "../buttons/EditButton";
import TripList from "../TripList";

// Store
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

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
  // const user2 = authStore.user;
  // console.log("ProfileList -> user", user2);
  // const profile = authStore.user.profile;
  // console.log("ProfileList -> profile", profile);

  // const user = authStore.user.id;
  // const profile = authStore.user.profile.userId;
  // console.log("ProfileList -> profilebelongstouser", profile);
  // console.log("ProfileList -> userhasid", user);

  // console.log("ProfileList -> user", user);

  const { user } = authStore;
  const profile = user.profile;
  // console.log("ProfileList -> profile", profile);
  // // const trips = tripStore.trips;
  // // console.log("ProfileList -> trips", trips);

  // // console.log("ProfileList -> user", user);

  return (
    <SafeAreaView>
      <ScrollView>
        <UserInfo>
          <Right>
            <EditButton profile={profile} />
          </Right>
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
          <Joined>
            Traveling since {moment(user.createdAt).format("dddd")}
          </Joined>
          <Bio>{profile.bio}</Bio>
        </UserInfo>
        <DiscoverButton block onPress={() => navigation.navigate("Discover")}>
          <Text>Discover</Text>
        </DiscoverButton>
        {/* <UserTripList navigation={navigation} my /> */}
        <TripList navigation={navigation} myTrips={authStore.myTrips} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(ProfileList);
