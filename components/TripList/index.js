import React from "react";
import { observer } from "mobx-react";
import { Content, List, Spinner, Text, ListItem } from "native-base";

//Components
import TripItem from "./TripItem";
import AddButton from "../buttons/AddButton";

//Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const TripList = ({ navigation, trips, myTrips }) => {
  if (tripStore.loading) return <Spinner />;

  const tripList = trips.map((trip) => (
    <TripItem
      trip={trip}
      key={trip.id}
      navigation={navigation}
      myTrips={myTrips}
    />
  ));

  return (
    <Content>
      <List>{tripList}</List>
      <AddButton />
    </Content>
  );
};

export default observer(TripList);
