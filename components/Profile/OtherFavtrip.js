import React from "react";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import { FavoriteTripTitle, NumOfTrip } from "./styles";
import TripList from "../TripList";
import { Text, Spinner } from "native-base";
import { observer } from "mobx-react";

const MyFavtrip = ({ userId }) => {
  const { user } = authStore;
  const trips = tripStore.trips.filter(
    (trip) => trip.userId === userId && trip.favorited
  );

  return (
    <>
      {trips.length !== 0 && (
        <FavoriteTripTitle>Favorite Trips ! {trips.length}</FavoriteTripTitle>
      )}
      <TripList trips={trips} />
    </>
  );
};

export default observer(MyFavtrip);
