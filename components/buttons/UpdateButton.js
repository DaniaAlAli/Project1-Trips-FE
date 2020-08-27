import React, { useState } from "react";

//Components
import TripModal from "../modals/TripModal";

// //Styles
import { AddButtonStyled, AddButtonText } from "./styles";

const UpdateButton = ({ trip }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <AddButtonStyled onPress={() => setIsOpen(true)}>
        <AddButtonText>Update</AddButtonText>
      </AddButtonStyled>
      <TripModal isOpen={isOpen} closeModal={closeModal} oldTrip={trip} />
    </>
  );
};

export default UpdateButton;
