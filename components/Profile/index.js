import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { observer } from "mobx-react";
import EditButton from "../buttons/EditButton";
import AddButton from "../buttons/AddButton";
import moment from "moment";

import {
  Text,
  Spinner,
  CardItem,
  Left,
  Right,
  ListItem,
  Icon,
  Button,
} from "native-base";

//Components
import TripList from "../TripList";

// Store
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

// //Styles
import {
  MyTripStyle,
  FavoriteTripTitle,
  NumOfTrip,
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

const Profile = ({ navigation }) => {
  const { user } = authStore;
  const profile = user.profile;

  if (!user) return <Spinner />;

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
          <Right>
            <EditButton profile={profile} />
            <AddButton />
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
        {favoritedTrips.length !== 0 && (
          <FavoriteTripTitle>
            Favorite Trips ! {favoritedTrips.length}
          </FavoriteTripTitle>
        )}
        <TripList trips={favoritedTrips} myTrips />
        {trips.length !== 0 && (
          <MyTripStyle>Welcome To My Trips ! {trips.length} </MyTripStyle>
        )}
        <TripList navigation={navigation} trips={trips} myTrips />
        <DiscoverButton block onPress={() => navigation.navigate("Discover")}>
          <Text>Discover</Text>
        </DiscoverButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Profile);
