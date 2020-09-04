import React from "react";
import { observer } from "mobx-react";
import { Right, Spinner } from "native-base";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";

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
} from "./styles";

//Stores
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import TripList from "../TripList";
import tripStore from "../../stores/tripStore";

const OtherProfile = ({ route, navigation }) => {
  if (!authStore.user) return <Spinner />;
  const { userId } = route.params;

  const otherProfile = profileStore.profiles.find((user) => user.id === userId);
  const trips = tripStore.trips.filter((trip) => trip.userId === userId);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <UserInfo>
            <Right></Right>
            <ProfileImage
              source={
                otherProfile.profile.image ?? {
                  uri:
                    "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png",
                }
              }
            />

            <Name>
              <FirstName>{otherProfile.firstName}</FirstName>
              <LastName>{otherProfile.lastName}</LastName>
            </Name>
            <UserName>@{otherProfile.username}</UserName>
            <Joined>
              Traveling since {moment(otherProfile.createdAt).format("dddd")}
            </Joined>
            <Bio>{otherProfile.profile.bio}</Bio>
          </UserInfo>
          <Text>All Trips: {trips.length}</Text>

          <TripList trips={trips} navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default observer(OtherProfile);
