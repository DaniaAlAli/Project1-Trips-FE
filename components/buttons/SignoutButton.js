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
    console.log("333");
    navigation.replace("Home"); // put a condition
    console.log("444");
  };

  return (
    <SignoutStyledButton type="Octicons" name="circle-slash" onPress={submit} />
  );
};

export default observer(SignoutButton);
