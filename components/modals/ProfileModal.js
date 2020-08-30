import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal } from "react-native";
import { Text } from "native-base";

//Stores

import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

//Styling
import {
  CloseButtonStyled,
  CreateButton,
  CreateButtonText,
  ModalContainer,
  ModalTitle,
  ModalTextInput,
  ModalView,
  NameField,
} from "./styles";

const ProfileModal = ({ closeModal, isOpen, oldProfile }) => {
  const [profile, setProfile] = useState({
    bio: oldProfile.bio,
    image: oldProfile.image,
  });

  // const handleChange = (event) => {
  //   setTrip({ ...trip, [event.target.name]: event.target.value });
  // };

  const handleSubmit = () => {
    profileStore.updateProfile(profile);
    closeModal();
  };

  return (
    <Modal
      transparent={true}
      visible={isOpen}
      onRequestClose={closeModal}
      animationType="slide"
    >
      <ModalContainer>
        <ModalView>
          <CloseButtonStyled
            onPress={closeModal}
            type="AntDesign"
            name="closecircleo"
          />
          <ModalTitle>Edit Profile</ModalTitle>
          <NameField>
            Name: {authStore.user.firstName} {authStore.user.lastName}
          </NameField>
          <NameField>Username: @{authStore.user.username}</NameField>
          <ModalTextInput
            multiline={true}
            onChangeText={(bio) => setProfile({ ...profile, bio })}
            placeholder="bio"
            placeholderTextColor="#000000"
            value={profile.bio}
          />
          <ModalTextInput
            onChangeText={(image) => setProfile({ ...profile, image })}
            placeholder="image"
            placeholderTextColor="#000000"
            value={profile.image}
          />
          <CreateButton onPress={handleSubmit}>
            <CreateButtonText>Update</CreateButtonText>
          </CreateButton>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};

export default observer(ProfileModal);