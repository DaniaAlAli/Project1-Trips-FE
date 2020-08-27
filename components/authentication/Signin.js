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

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.navigate("Trips");
  };

  return (
    // REVIEW: Move inline styling to styles.js
    <BackgroundImage source={require(`../../Plane.png`)}>
      <FormStyled>
        <Item floatingLabel>
          <Label style={{ color: "white" }}>Username</Label>
          <Input
            value={user.username}
            onChangeText={(username) => setUser({ ...user, username })}
            style={{ color: "white" }}
          />
        </Item>

        <Item floatingLabel last>
          <Label style={{ color: "white" }}>Password</Label>
          <Input
            secureTextEntry={true}
            value={user.password}
            onChangeText={(password) => setUser({ ...user, password })}
            style={{ color: "white" }}
          />
        </Item>
      </FormStyled>

      <SignUpButtonStyled onPress={handleSubmit} block>
        <Text>Sign in</Text>
      </SignUpButtonStyled>

      <CreateNewAccountStyled primary>
        <Text onPress={() => navigation.navigate("Signup")}>Register</Text>
      </CreateNewAccountStyled>
    </BackgroundImage>
  );
};

export default observer(Signin);
