import React from "react";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

//Styles
import {
  SignInButtonStyled,
  BackgroundImage,
  Title,
  SignInStyled,
} from "./styles";
import { Text } from "native-base";

const Home = ({ navigation }) => {
  const user = authStore.user;
  return (
    <BackgroundImage
      source={{
        uri:
          "https://i.pinimg.com/564x/c3/6b/2d/c36b2d9bdeb54f16d687f4f2df193e04.jpg",
      }}
    >
      <Title>
        {authStore.user
          ? `Hello, ${user.username} ! 
  Would You Like Share your Trips?`
          : "Trips World"}
      </Title>
      <SignInStyled
        onPress={
          authStore.user
            ? authStore.signout
            : () => navigation.navigate("Signin")
        }
      >
        <SignInStyled>{authStore.user ? "Sign out" : "Sign in"}</SignInStyled>
      </SignInStyled>
    </BackgroundImage>
  );
};

export default observer(Home);
