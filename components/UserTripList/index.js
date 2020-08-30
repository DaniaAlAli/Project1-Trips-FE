import React from "react";
import { observer } from "mobx-react";
import { Content, List, Spinner } from "native-base";

//Components
import TripItem from "../TripList/TripItem";
import AddButton from "../buttons/AddButton";

//Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const userTripList = tripStore.trips
    .filter((trip) => trip.userId === authStore.user.id)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return (
    <Content>
      <List>{userTripList}</List>
      <AddButton />
    </Content>
  );
};

export default observer(TripList);
