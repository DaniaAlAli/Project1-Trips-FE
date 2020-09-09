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
  // if(!authStore.user)
  const user = authStore.user;
  return (
    <BackgroundImage source={require(`../../Plane1.jpg`)}>
      <Title>
        {user
          ? `Hello, ${user.username} ! 
  Would You Like Share your Trips?`
          : "Trips World"}
      </Title>
      <SignInStyled onPress={() => navigation.navigate("Signin")}>
        <SignInStyled>Sign in</SignInStyled>
      </SignInStyled>
    </BackgroundImage>
  );
};

export default observer(Home);
