import React from "react";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";

// Styles
import { SignoutStyledButton } from "./styles";

// Stores
import authStore from "../../stores/authStore";

const SignoutButton = () => {
  const navigation = useNavigation();
  const submit = async () => {
    await authStore.signout(navigation);
    navigation.replace("Home");
  };

  return (
    <SignoutStyledButton type="Octicons" name="circle-slash" onPress={submit} />
  );
};

export default observer(SignoutButton);
