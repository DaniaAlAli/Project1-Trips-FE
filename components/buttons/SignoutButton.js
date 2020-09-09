import React from "react";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";

// Styles
import { SignoutStyledButton } from "./styles";

// Stores
import authStore from "../../stores/authStore";
import { Spinner, Icon } from "native-base";

const SignoutButton = () => {
  const navigation = useNavigation();
  const submit = async () => {
    await authStore.signout(navigation);
    navigation.navigate("Home");
  };

  return (
    <SignoutStyledButton onPress={submit} type="AntDesign" name="logout" />
  );
};

export default observer(SignoutButton);
