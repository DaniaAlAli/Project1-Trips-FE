import React from "react";
import { observer } from "mobx-react";
import { Content, List, Spinner } from "native-base";

//Components
import TripItem from "./TripItem";
import AddButton from "../buttons/AddButton";

//Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  // const userTripList = tripStore.trips
  //   .filter((trip) => trip.userId === authStore.user.id)
  //   .map((trip) => (
  //     <TripItem trip={trip} key={trip.id} navigation={navigation} />
  //   ));

  const tripList = tripStore.trips
    .filter((trip) => trip.userId !== authStore.user.id)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  // {authStore.user.id === authStore.user.profile.userId (this line is wrong)
  //   ? userTripList
  //   : tripList}

  //Check which screen your one and filter depending
  //have one master list that has everything and then conditionnaly filter depending which list you want to render on the screen

  return (
    <Content>
      <List>{tripList}</List>
      <AddButton />
    </Content>
  );
};

export default observer(TripList);
