import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal } from "react-native";

//Stores

import tripStore from "../../stores/tripStore";

//Styling
import {
  CreateButton,
  CreateButtonText,
  ModalContainer,
  ModalTitle,
  ModalTextInput,
  ModalView,
} from "./styles";

const TripModal = ({ closeModal, isOpen, navigation }) => {
  const [trip, setTrip] = useState({
    destination: "",
    details: "",
  });

  const handleSubmit = () => {
    tripStore.createTrip(trip);
    closeModal();
  };

  return (
    <Modal
      transparent={true}
      visible={isOpen}
      onRequestClose={closeModal}
      animationType="fade"
    >
      <ModalContainer>
        <ModalView>
          <ModalTitle>Where did you go?</ModalTitle>
          <ModalTextInput
            onChangeText={(destination) => setTrip({ ...trip, destination })}
            placeholder="Destination"
            placeholderTextColor="#000000"
          />
          <ModalTextInput
            onChangeText={(details) => setTrip({ ...trip, details })}
            placeholder="Details"
            placeholderTextColor="#000000"
          />
          <CreateButton onPress={handleSubmit}>
            <CreateButtonText>Create Trip</CreateButtonText>
          </CreateButton>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};

export default observer(TripModal);
