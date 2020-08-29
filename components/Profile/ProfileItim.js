import React from "react";
import { ListItem, Text, Thumbnail } from "native-base";
import { observer } from "mobx-react";

const ProfileItim = ({ pro }) => {
  return (
    <ListItem>
      <Thumbnail square source={pro.image} />
      <Text>Bio: {pro.bio}</Text>
    </ListItem>
  );
};

export default observer(ProfileItim);
