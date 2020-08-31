import React from "react";
import { observer } from "mobx-react";
import { Content, List, Spinner, Text } from "native-base";

//Components
import TripItem from "./TripItem";
import AddButton from "../buttons/AddButton";

//Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const TripList = ({ navigation, myTrips, trips }) => {
  if (tripStore.loading) return <Spinner />;

  const userTripList = tripStore.trips
    .filter((trip) => trip.userId === authStore.user.id)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  const tripList = tripStore.trips
    .filter((trip) => trip.userId !== authStore.user.id)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  //   if (tripStore.loading) return <Spinner />;

  // {  if (myTrips) {
  //     tripStore.trips.map((trip) => (
  //       <TripItem trip={trip} key={trip.id} navigation={navigation} />
  //     ));
  //   } else if (trips) {
  //     tripStore.trips
  //       .filter((trip) => trip.userId !== authStore.user.id)
  //       .map((trip) => (
  //         <TripItem trip={trip} key={trip.id} navigation={navigation} />
  //       ));
  //   }}

  // const userTripList = profile
  //   ? tripStore.trips
  //       .filter((trip) => trip.userId === authStore.user.id)
  //       .map((trip) => (
  //         <TripItem trip={trip} key={trip.id} navigation={navigation} />
  //       ))
  //   : tripStore.trips
  //       .filter((trip) => trip.userId !== authStore.user.id)
  //       .map((trip) => (
  //         <TripItem trip={trip} key={trip.id} navigation={navigation} />
  //       ));

  //Both list Detail the same is exactly the same
  //The diference will be in the List page (update button adn delete button)

  // the difference in the profile only trips of user in discovery trips of other without profiletrips
  // Pass a prop(myTrips) either true or false when we render triplist within the profile component we pass it to triplist as a prop as true
  //  so taht the component knows which list to display. In this component you can check if the list is true and if true render myTrips.
  // Use same condition to display or not display the upd and delte buttons
  // Profile component passes this prop to the tripList component

  //have one master list that has everything and then conditionnaly filter depending which list you want to render on the screen
  //Something like this

  return (
    <Content>
      <Text> {userTripList}</Text>
      <AddButton />
    </Content>
  );
};

export default observer(TripList);
