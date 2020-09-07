import React from "react";
import { observer } from "mobx-react";

import moment from "moment";
import { Text, Right, Left } from "native-base";
import EditButton from "../buttons/EditButton";
import AddButton from "../buttons/AddButton";
import authStore from "../../stores/authStore";

//Styles
import {
  Bio,
  Joined,
  FirstName,
  LastName,
  Name,
  ProfileImage,
  UserInfo,
  UserName,
  DiscoverButton,
} from "./styles";
import SignoutButton from "../buttons/SignoutButton";

const ProfileItem = () => {
  const { user } = authStore;
  const { profile } = user;
  return (
    <UserInfo style={{ backgroundColor: "#101030" }}>
      <Right>
        <EditButton profile={profile} />
      </Right>
      {/* <SignoutButton />  Side drawer */}

      <ProfileImage
        source={
          profile.image ?? {
            uri:
              "https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png",
          }
        }
      />

      <Name>
        <FirstName>{user.firstName}</FirstName>
        <LastName>{user.lastName}</LastName>
      </Name>
      <UserName>{user.username}</UserName>
      {/* <Joined>Traveling since {moment(user.createdAt).format("dddd")}</Joined> */}
      <Bio>{profile.bio}</Bio>
      <AddButton />
    </UserInfo>
  );
};

export default observer(ProfileItem);
