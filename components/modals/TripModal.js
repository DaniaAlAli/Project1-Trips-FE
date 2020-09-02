import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal } from "react-native";

//Stores

import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore"; // unused import

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

const TripModal = ({ closeModal, isOpen, oldTrip }) => {
  const [trip, setTrip] = useState(
    oldTrip ?? {
      country: "",
      destination: "",
      details: "",
      image: "",
      date: "",
    }
  );

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

          <ModalTitle>Where did you go?</ModalTitle>
          {/* remove this commented line if youre not gonna use it */}
          {/* <NameField>Name: {tripStore.trip.profileName}</NameField> */}
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
          <ModalTextInput
            onChangeText={(image) => setTrip({ ...trip, image })}
            placeholder="Image"
            placeholderTextColor="#000000"
            value={trip.image}
          />
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
          <CreateButton onPress={handleSubmit}>
            <CreateButtonText>{oldTrip ? "Update" : "Create"}</CreateButtonText>
          </CreateButton>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};

export default observer(TripModal);
