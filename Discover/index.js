import React from "react";
import { observer } from "mobx-react";
import { Content } from "native-base";

//Components
import TripList from "../components/TripList";

//Stores
import tripStore from "../stores/tripStore";

const Discover = ({ navigation }) => {
  return (
    <Content>
      <TripList navigation={navigation} trips={tripStore.trips} />
    </Content>
  );
};

export default observer(Discover);
