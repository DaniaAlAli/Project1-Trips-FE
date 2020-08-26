import React, { useState } from "react";
import { observer } from "mobx-react";

//Styles
import { Item, Label, Input, Text } from "native-base";
import {
  BackgorundImage,
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
    if (authStore.user) navigation.replace("Home");
  };

  return (
    <BackgorundImage source={require(`../../Plane.png`)}>
      <FormStyled>
        <Item floatingLabel>
          <Label style={{ color: "white" }}>First Name</Label>
          <Input
            onChangeText={(firstName) => setUser({ ...user, firstName })}
          />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "white" }}>Last Name</Label>
          <Input onChangeText={(lastName) => setUser({ ...user, lastName })} />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "white" }}>Email</Label>
          <Input onChangeText={(email) => setUser({ ...user, email })} />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "white" }}>Username</Label>
          <Input onChangeText={(username) => setUser({ ...user, username })} />
        </Item>

        <Item floatingLabel last>
          <Label style={{ color: "white" }}>Password</Label>
          <Input
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
        </Item>
      </FormStyled>

      <SignUpButtonStyled onPress={handleSubmit} block>

        <Text>Sign up</Text>

      </SignUpButtonStyled>

      <CreateNewAccountStyled primary>

        <Text onPress={() => navigation.navigate("Sign in")}>
          already have an account? Sign in!
        </Text>
        
      </CreateNewAccountStyled>
    </BackgorundImage>
  );
};

export default observer(Signup);
