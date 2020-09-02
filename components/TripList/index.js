import React from "react";
import { observer } from "mobx-react";
import { Content, List, Spinner } from "native-base";

import { MyTripStyle } from "./styles";

//Components
import TripItem from "./TripItem";
import AddButton from "../buttons/AddButton";

//Stores
import tripStore from "../../stores/tripStore";

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
      {myTrips && <MyTripStyle>Welcome To My Trips!</MyTripStyle>}

      <List>{tripList}</List>
    </Content>
  );
};

export default observer(TripList);
