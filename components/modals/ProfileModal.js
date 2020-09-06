import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal } from "react-native";

//Stores
import authStore from "../../stores/authStore";

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

  const handleSubmit = () => {
    authStore.updateProfile(profile);
    closeModal();
  };

  const { user } = authStore;

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
          <ModalTextInput
            onChangeText={(username) => setProfile({ ...user, username })}
            placeholder="username"
            placeholderTextColor="#000000"
            value={user.username}
          />
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
