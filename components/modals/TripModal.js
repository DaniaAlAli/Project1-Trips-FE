import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal, Text, TouchableOpacity } from "react-native";

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

//Stores
import tripStore from "../../stores/tripStore";

//Components
import PlaceInput from "./PlaceInput";

//Styling
import {
  CloseButtonStyled,
  CreateButton,
  CreateButtonText,
  ModalContainer,
  ModalTitle,
  ModalTextInput,
  ModalView,
} from "./styles";

const TripModal = ({ closeModal, isOpen, oldTrip }) => {
  const [trip, setTrip] = useState(
    oldTrip ?? {
      country: "",
      destination: "",
      details: "",
      image: "",
      date: "",
      // input: "",
      predictions: [],
      destinationInput: "",
      latitude: "29.375859",
      longitude: "47.9774052",
    }
  );

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
    // setSelectedImage({ localUri: pickerResult.uri });
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = pickerResult.uri;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Assume "photo" is the name of the form field the server expects
    setTrip({ ...trip, image: { uri: localUri, name: filename, type } });
  };

  if (selectedImage !== null) {
    return <Image source={{ uri: selectedImage.localUri }} />;
  }

  const handleSubmit = () => {
    if (oldTrip) {
      tripStore.updateTrip(trip);
    } else {
      tripStore.createTrip(trip);
      setTrip({
        country: "",
        destination: "",
        details: "",
        image: "",
        date: "",
        // input: "",
        predictions: [],
        destinationInput: "",
        latitude: "29.375859",
        longitude: "47.9774052",
      });
    }
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
          {oldTrip ? (
            <ModalTitle>Update Trip </ModalTitle>
          ) : (
            <ModalTitle>Where did you go ?</ModalTitle>
          )}

          <ModalTextInput
            onChangeText={(country) => setTrip({ ...trip, country })}
            placeholder="Country"
            placeholderTextColor="#000000"
            value={trip.country}
          />
          <ModalTextInput
            onChangeText={(destination) => setTrip({ ...trip, destination })}
            placeholder="Destination"
            placeholderTextColor="#000000"
            value={trip.destination}
          />
          {/* <ModalTextInput
            onChangeText={(image) => setTrip({ ...trip, image })}
            placeholder="Image"
            placeholderTextColor="#000000"
            value={trip.image}
          /> */}
          <TouchableOpacity onPress={openImagePickerAsync}>
            <Text>Pick a photo</Text>
          </TouchableOpacity>
          <ModalTextInput
            onChangeText={(date) => setTrip({ ...trip, date })}
            placeholder="Date"
            placeholderTextColor="#000000"
            value={trip.date}
          />
          <ModalTextInput
            multiline={true}
            onChangeText={(details) => setTrip({ ...trip, details })}
            placeholder="Details"
            placeholderTextColor="#000000"
            value={trip.details}
          />
          <PlaceInput
            // value={trip.destinationInput}
            trip={trip}
            setTrip={setTrip}
          />
          <CreateButton onPress={handleSubmit}>
            <CreateButtonText>{oldTrip ? "Update" : "Create"}</CreateButtonText>
          </CreateButton>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};

export default observer(TripModal);
