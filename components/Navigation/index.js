import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { observer } from "mobx-react";

import BottomTabNavigator from "./BottomTabNavigator";

//components
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Profile from "../Profile";
import SignoutButton from "../buttons/SignoutButton";
import Discover from "../../Discover/index";
import TripDetail from "../TripDetail";

const { Navigator, Screen } = createStackNavigator();
// const { Navigator, Screen } = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);
