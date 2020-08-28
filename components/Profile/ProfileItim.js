import React, { useState } from "react";
import { ListItem, Text } from "native-base";
import { observer } from "mobx-react";
import { TextInput } from "react-native-gesture-handler";

const ProfileItim = () => {
  const [pro, setProfile] = useState({
    bio: "",
  });
  return (
    <ListItem>
      <TextInput
        onChangeText={(bio) => setProfile({ ...pro, bio })}
        placeholder="Bio"
        placeholderTextColor="#000000"

        // value={pro.bio}
      />
    </ListItem>
  );
};

export default observer(ProfileItim);
