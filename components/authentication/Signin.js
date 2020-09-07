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
    if (authStore.user) navigation.navigate("MyProfile", { user: user });
  };

  return (
    <BackgroundImage source={require(`../../wing2.jpg`)}>
      <FormStyled>
        <Item floatingLabel>
          <Label style={{ color: "white" }}>Username</Label>
          <Input
            value={user.username}
            onChangeText={(username) => setUser({ ...user, username })}
            style={{ color: "white" }}
          />
        </Item>

        <Item floatingLabel>
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
        <Text>Check in</Text>
      </SignUpButtonStyled>

      <CreateNewAccountStyled primary>
        <Text onPress={() => navigation.navigate("Signup")}>New user?</Text>
      </CreateNewAccountStyled>
    </BackgroundImage>
  );
};

export default observer(Signin);
