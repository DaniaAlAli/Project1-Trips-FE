import React, { useState } from "react";
import { observer } from "mobx-react";

//Styles
import { Item, Label, Input, Text } from "native-base";
import {
  BackgroundImage,
  CreateNewAccountStyled,
  SignUpButtonStyled,
  FormStyled,
} from "./styles";

//Stores
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.navigate("Profile", { user: user });
  };

  return (
    <BackgroundImage source={require(`../../Plane.png`)}>
      <FormStyled>
        <Item floatingLabel>
          <Label style={{ color: "white" }}>First Name</Label>
          <Input
            onChangeText={(firstName) => setUser({ ...user, firstName })}
            style={{ color: "white" }}
          />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "white" }}>Last Name</Label>
          <Input
            onChangeText={(lastName) => setUser({ ...user, lastName })}
            style={{ color: "white" }}
          />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "white" }}>Email</Label>
          <Input
            onChangeText={(email) => setUser({ ...user, email })}
            style={{ color: "white" }}
          />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "white" }}>Username</Label>
          <Input
            onChangeText={(username) => setUser({ ...user, username })}
            style={{ color: "white" }}
          />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "white" }}>Password</Label>
          <Input
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
            style={{ color: "white" }}
          />
        </Item>
      </FormStyled>

      <SignUpButtonStyled onPress={handleSubmit} block>
        <Text>Sign up</Text>
      </SignUpButtonStyled>

      <CreateNewAccountStyled primary>
        <Text onPress={() => navigation.navigate("Signin")}>
          Already have an account? Sign in!
        </Text>
      </CreateNewAccountStyled>
    </BackgroundImage>
  );
};

export default observer(Signup);
