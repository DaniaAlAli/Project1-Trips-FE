import React from "react";
import ProfileItim from "./ProfileItim";
import { List, ListItem } from "native-base";
import { observer } from "mobx-react";

// Store
import authStore from "../../stores/authStore";

const ProfileList = () => {
  // Sorry I didn't fix it
  // const profileList = authStore.user.profile;
  console.log("ProfileList -> profileList", profileList);
  // .filter((profile) => profile.userId === user.id)
  // .map((profile) => profile);
  // console.log("ProfileList -> profileList", profileList);

  return (
    <List>
      <ListItem>{profileList}</ListItem>
    </List>
  );
};

export default observer(ProfileList);
