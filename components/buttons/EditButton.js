import React, { useState } from "react";
import { Icon } from "native-base";

//Components
import ProfileModal from "../modals/ProfileModal";

//Styles
import { EditProfile } from "./styles";

const EditButton = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <EditProfile onPress={() => setIsOpen(true)}>
        <Icon type="Feather" name="edit" />
      </EditProfile>
      <ProfileModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldProfile={profile}
      />
    </>
  );
};

export default EditButton;
