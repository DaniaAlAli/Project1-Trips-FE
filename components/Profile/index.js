import React from "react";
import ProfileItim from "./ProfileItim";
import { List, ListItem } from "native-base";
import { observer } from "mobx-react";

// Store
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

const ProfileList = () => {
  // const { user } = route.params;
  let user = authStore.user;
  const profileList = profileStore.profiles
    .filter((profile) => profile.userId === user.id)
    .map((profile) => <ProfileItim profile={profile} key={profile.id} />);

  // console.log("ProfileList -> profileList", profileList);

  return (
    <List>
      <ListItem>{profileList}</ListItem>
    </List>
  );
};

export default observer(ProfileList);
