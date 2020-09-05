import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { observer } from "mobx-react";
import moment from "moment";

//Components
import TripList from "../TripList";
import EditButton from "../buttons/EditButton";
import AddButton from "../buttons/AddButton";

// Store
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import profileStore from "../../stores/profileStore";

//Styles
import {
  MyTripStyle,
  FavoriteTripTitle,
  UserInfo,
  Bio,
  Joined,
  FirstName,
  LastName,
  Name,
  ProfileImage,
  UserName,
  DiscoverButton,
} from "./styles";

import { Text, Spinner, Right, Left } from "native-base";

const Profile = ({ route, navigation }) => {
  const { userId } = route.params;
  let user;
  if (userId) {
    user = profileStore.profiles.find((user) => user.id === userId);
  } else {
    user = authStore.user;
    if (!user) return <Spinner />;
  }
  const { profile } = user;
  const trips = tripStore.trips.filter(
    (trip) => trip.userId === user.id && !trip.favorited
  );

  const favoritedTrips = tripStore.trips.filter(
    (trip) => trip.userId === user.id && trip.favorited
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <UserInfo>
          {!userId && (
            <Right>
              <EditButton profile={profile} />
              <AddButton />
            </Right>
          )}
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
        {favoritedTrips.length !== 0 && (
          <FavoriteTripTitle>
            Favorite Trips ! {favoritedTrips.length}
          </FavoriteTripTitle>
        )}
        <TripList trips={favoritedTrips} myTrips={!userId} />
        {trips.length !== 0 && (
          <MyTripStyle>Welcome To My Trips ! {trips.length} </MyTripStyle>
        )}
        <TripList navigation={navigation} trips={trips} myTrips={!userId} />
        <DiscoverButton block onPress={() => navigation.navigate("Discover")}>
          <Text>{!userId ? "Discover" : "< All trips"}</Text>
        </DiscoverButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Profile);
