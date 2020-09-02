import React, { useState } from "react";

//Components
import TripModal from "../modals/TripModal";

// //Styles
import { UpdateButtonStyled, UpdateButtonText } from "./styles";

const UpdateButton = ({ trip }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <UpdateButtonStyled onPress={() => setIsOpen(true)}>
        <UpdateButtonText>Update</UpdateButtonText>
      </UpdateButtonStyled>
      <TripModal isOpen={isOpen} closeModal={closeModal} oldTrip={trip} />
    </>
  );
};

export default UpdateButton;
