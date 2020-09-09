import React, { useState } from "react";
import { observer } from "mobx-react";
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

//Stores
import authStore from "../../stores/authStore";

const styles = StyleSheet.create({
  /* Other styles hidden to keep the example brief... */
  thumbnail: {
    height: 200,
    width: 200,
    borderRadius: 500,
  },
});

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
    authStore.update(profile);
    closeModal();
  };

  const { user } = authStore;

  // Image
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = pickerResult.uri;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Assume "photo" is the name of the form field the server expects
    setProfile({ ...profile, image: { uri: localUri, name: filename, type } });
    console.log("openImagePickerAsync -> profile", profile);
  };

  if (selectedImage !== null) {
    return (
      <Image
        source={{ uri: selectedImage.localUri }}
        style={styles.thumbnail}
      />
    );
  }
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
            Name: {user.firstName} {user.lastName}
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
          <TouchableOpacity onPress={openImagePickerAsync}>
            <Text>Pick a photo</Text>
          </TouchableOpacity>
          <CreateButton onPress={handleSubmit}>
            <CreateButtonText>Update</CreateButtonText>
          </CreateButton>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};

export default observer(ProfileModal);
