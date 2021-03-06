import React from "react";
import { observer } from "mobx-react";
import { Content, Spinner } from "native-base";

//Components
import TripList from "../components/TripList";

//Stores
import tripStore from "../stores/tripStore";
import authStore from "../stores/authStore";

const Discover = ({ navigation }) => {
  if (!authStore.user) return <Spinner />;
  const trips = tripStore.trips.filter(
    (trip) => trip.userId !== authStore.user.id
  );

  return (
    <Content>
      <TripList trips={trips} navigation={navigation} />
    </Content>
  );
};

export default observer(Discover);
