import React from "react";
import { observer } from "mobx-react";

import moment from "moment";
import { Text, Right } from "native-base";
import EditButton from "../buttons/EditButton";
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

const ProfileItim = () => {
  const { user } = authStore;
  const profile = user.profile;
  return (
    <UserInfo>
      <Right>
        <EditButton profile={profile} />
      </Right>
      <ProfileImage
        source={
          profile.image ?? {
            uri:
              "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png",
          }
        }
      />

      <Name>
        <FirstName>{user.firstName}</FirstName>
        <LastName>{user.lastName}</LastName>
      </Name>
      <UserName>@{user.username}</UserName>
      <Joined>Traveling since {moment(user.createdAt).format("dddd")}</Joined>
      <Bio>{profile.bio}</Bio>
    </UserInfo>
  );
};

export default observer(ProfileItim);
