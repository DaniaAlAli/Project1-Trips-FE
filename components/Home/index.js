import React from "react";

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

      <SignInButtonStyled onPress={() => navigation.navigate("Trips")}>
        <Text>Sign in</Text>
      </SignInButtonStyled>
      <SignUpButtonStyled onPress={() => navigation.navigate("Trips")}>
        <Text>Register</Text>
      </SignUpButtonStyled>
    </BackgroundImage>
  );
};

export default Home;
