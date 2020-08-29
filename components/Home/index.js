import React from "react";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

//Styles
import {
  SignInButtonStyled,
  SignUpButtonStyled,
  BackgroundImage,
  Title,
} from "./styles";
import { Text } from "native-base";

const Home = ({ navigation }) => {
  return (
    <BackgroundImage
      source={{
        uri:
          "https://i.pinimg.com/564x/c3/6b/2d/c36b2d9bdeb54f16d687f4f2df193e04.jpg",
      }}
    >
      <Title>Plan your Trips</Title>

      <SignInButtonStyled
        onPress={
          authStore.user
            ? authStore.signout
            : () => navigation.navigate("Signin")
        }
      >
        <Text>{authStore.user ? "Sign out" : "Sign in"}</Text>
      </SignInButtonStyled>
      <SignUpButtonStyled onPress={() => navigation.navigate("Signup")}>
        <Text>Register</Text>
      </SignUpButtonStyled>
    </BackgroundImage>
  );
};

export default observer(Home);
