import React from "react";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import { FavoriteTripTitle } from "./styles";
import TripList from "../TripList";
import { Text } from "native-base";
import { observer } from "mobx-react";

const MyFavtrip = ({ myTrips }) => {
  const { user } = authStore;
  const trips = tripStore.trips.filter(
    (trip) => trip.userId === user.id && trip.favorite
  );
  return (
    <>
      <FavoriteTripTitle>Favorite Trips !</FavoriteTripTitle>
      <Text>My Favorite Trips: {trips.length}</Text>
      <TripList trips={trips} myTrips />
    </>
  );
};

export default observer(MyFavtrip);
