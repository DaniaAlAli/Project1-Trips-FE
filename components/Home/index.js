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
    <BackgroundImage source={require(`../../star.jpg`)}>
      <Title>Share your Trips</Title>

      <SignInButtonStyled
        onPress={
          authStore.user
            ? authStore.signout
            : () => navigation.navigate("Signin")
        }
      >
        <Text>{authStore.user ? "Sign out" : "Sign in"}</Text>
      </SignInButtonStyled>
    </BackgroundImage>
  );
};

export default observer(Home);
