import React from "react";
import { observer } from "mobx-react";
import { Content, List, Spinner } from "native-base";

//Components
import TripItem from "./TripItem";
import AddButton from "../buttons/AddButton";

//Stores
import tripStore from "../../stores/tripStore";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{tripList}</List>
      <AddButton />
    </Content>
  );
};

export default observer(TripList);
