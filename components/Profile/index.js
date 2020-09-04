import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { observer } from "mobx-react";
import { Text, Spinner } from "native-base";

//Components
import TripList from "../TripList";
import ProfileItim from "./ProfileItim";

// Store
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

// //Styles
import { DiscoverButton, MyTripStyle, FavoriteTripTitle } from "./styles";
import MyFavtrip from "./MyFavtrip";

const Profile = ({ navigation }) => {
  const { user } = authStore;
  if (!user) return <Spinner />;

  const trips = tripStore.trips.filter(
    (trip) => trip.userId === user.id && !trip.favorite
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <ProfileItim navigation={navigation} />
        <MyTripStyle>Welcome To My Trips!</MyTripStyle>
        <Text>All Trips: {trips.length}</Text>

        <TripList navigation={navigation} trips={trips} myTrips />
        <MyFavtrip myTrips />
        <DiscoverButton block onPress={() => navigation.navigate("Discover")}>
          <Text>Discover</Text>
        </DiscoverButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Profile);
