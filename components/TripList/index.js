import React from "react";
import { observer } from "mobx-react";
import { Content, List, Spinner } from "native-base";

import { MyTripStyle, BackgroundImage } from "./styles";

//Components
import TripItem from "./TripItem";

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
    <Content style={{ backgroundColor: "#d8e0ea" }}>
      {myTrips && <MyTripStyle>Welcome To My Trips!</MyTripStyle>}

      <List>{tripList}</List>

      {/* bottom nav */}
    </Content>
  );
};

export default observer(TripList);
