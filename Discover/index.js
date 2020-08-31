import React from "react";
import { observer } from "mobx-react";
import { Content } from "native-base";

//Components
import TripList from "../components/TripList";

//Stores
import tripStore from "../stores/tripStore";
import authStore from "../stores/authStore";

const Discover = ({ navigation }) => {
  const trips = tripStore.trips.filter(
    (trip) => trip.userId !== authStore.user.id
  );

  return (
    <Content>
      <TripList navigation={navigation} trips={trips} />
    </Content>
  );
};

export default observer(Discover);
