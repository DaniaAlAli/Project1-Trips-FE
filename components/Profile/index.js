import React from "react";
import ProfileItim from "./ProfileItim";
import { List, ListItem, Text } from "native-base";
import { observer } from "mobx-react";

// Store
import authStore from "../../stores/authStore";

const ProfileList = () => {
  const user = authStore.user;
  const myProfile = user.profile.map((user) => (
    <ProfileItim profile={profile} key={profile.id} />
  ));

  return (
    <List>
      <Text>{myProfile}</Text>
    </List>
  );
};

export default observer(ProfileList);
