import React, { useState } from "react";

//Components
import TripModal from "../modals/TripModal";

//Styles
import { AddButtonStyled, AddButtonText } from "./styles";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <AddButtonStyled onPress={() => setIsOpen(true)}>
        <AddButtonText> Add New Trip</AddButtonText>
      </AddButtonStyled>
      <TripModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
