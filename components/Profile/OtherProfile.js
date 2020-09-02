import React from "react";
import { observer } from "mobx-react";
import { Content, Spinner, Text, List, ListItem } from "native-base";

// //Components
// import TripList from "../components/TripList";

//Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import ProfileItim from "./ProfileItim";
import profileStore from "../../stores/profileStore";

const OtherProfile = ({ route }) => {
  if (!authStore.user) return <Spinner />;
  const { userId } = route.params;

  const otherProfile = profileStore.profiles.find((user) => user.id === userId);
  console.log("OtherProfile -> otherProfile", otherProfile);
  return <List></List>;
};

export default observer(OtherProfile);
