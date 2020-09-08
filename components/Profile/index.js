import React from "react";
import moment from "moment";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Components
import TripList from "../TripList";
import EditButton from "../buttons/EditButton";
import AddButton from "../buttons/AddButton";

// Store
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import profileStore from "../../stores/profileStore";
import SignoutButton from "../buttons/SignoutButton";

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
  BackgroundImage,
} from "./styles";

import { Text, Spinner, Right, Body } from "native-base";

const Profile = ({ route, navigation }) => {
  const userId = route.params?.userId;
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
          <BackgroundImage source={require(`../../galaxy.jpg`)}>
            <Body>
              <ProfileImage
                source={profile.image ?? require(`../../user1.png`)}
              />
              <Name>
                <FirstName>{user.firstName}</FirstName>
                <LastName> {user.lastName}</LastName>
              </Name>
              <UserName>Username : @{user.username}</UserName>
              <Joined>
                Traveling since : {moment(user.createdAt).format("dddd")}
              </Joined>
              <Bio> Bio : {profile.bio}</Bio>
              {!userId && (
                <Right>
                  <EditButton profile={profile} />
                  <AddButton />
                </Right>
              )}
            </Body>
          </BackgroundImage>
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
        {userId && (
          <DiscoverButton
            block
            onPress={() => {
              navigation.navigate("Discover");
            }}
          >
            <Text> All trips</Text>
          </DiscoverButton>
        )}

        {!userId && <SignoutButton />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Profile);
