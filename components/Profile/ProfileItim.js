import React from "react";
import { ListItem, Text, Thumbnail } from "native-base";
import { observer } from "mobx-react";

const ProfileItim = ({ profile }) => {
  return (
    <ListItem>
      <Thumbnail square source={profile.image} />
      <Text>Bio: {profile.bio}</Text>
    </ListItem>
  );
};

export default observer(ProfileItim);
