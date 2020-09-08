import React, { useState } from "react";
import { Icon, Text } from "native-base";

//Components
import ProfileModal from "../modals/ProfileModal";

//Styles
import { EditProfile } from "./styles";

const EditButton = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <EditProfile onPress={() => setIsOpen(true)}>Edit Profile</EditProfile>
      <ProfileModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldProfile={profile}
      />
    </>
  );
};

export default EditButton;
