import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { observer } from "mobx-react";
import moment from "moment";
import { Text, Right, Spinner } from "native-base";

//Components
import UserTripList from "../UserTripList";
import EditButton from "../buttons/EditButton";
import TripList from "../TripList";
import ProfileItim from "./ProfileItim";

// Store
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

// //Styles
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
import profileStore from "../../stores/profileStore";

const Profile = ({ navigation }) => {
  const { user } = authStore;
  if (!user) return <Spinner />;
  const trips = tripStore.trips.filter((trip) => trip.userId === user.id);

  return (
    <SafeAreaView>
      <ScrollView>
        <ProfileItim navigation={navigation} />
        <TripList trips={trips} myTrips />
        <DiscoverButton block onPress={() => navigation.navigate("Discover")}>
          <Text>Discover</Text>
        </DiscoverButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Profile);
