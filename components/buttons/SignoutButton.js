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
    console.log("ERROOORRR");
    await authStore.signout();
    // navigation.replace("Home"); // put a condition tha
  };

  return (
    <SignoutStyledButton type="Octicons" name="circle-slash" onPress={submit} />
  );
};

export default observer(SignoutButton);
