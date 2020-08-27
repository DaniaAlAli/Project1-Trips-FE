import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal } from "react-native";

//Stores

import tripStore from "../../stores/tripStore";

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

const TripModal = ({ closeModal, isOpen, oldTrip, route }) => {
  console.log("route", route);
  const [trip, setTrip] = useState(
    oldTrip
      ? {
          destination: oldTrip.destination,
          details: oldTrip.details,
          image: oldTrip.image,
          date: oldTrip.date,
        }
      : { destination: "", details: "", image: "", date: "" }
  );

  // const handleChange =() => {
  //   setTrip({...trip,})
  // }

  const handleSubmit = () => {
    tripStore.createTrip(trip);
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
          <ModalTextInput
            onChangeText={(image) => setTrip({ ...trip, image })}
            placeholder="Image"
            placeholderTextColor="#000000"
          />
          <ModalTextInput
            onChangeText={(date) => setTrip({ ...trip, date })}
            placeholder="Date"
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
