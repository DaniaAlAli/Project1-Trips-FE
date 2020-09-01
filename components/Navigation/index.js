import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

//components
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import TripList from "../TripList/index";
import TripDetail from "../TripDetail/index";
import ProfileList from "../Profile";
import SignoutButton from "../buttons/SignoutButton";
import Discover from "../../Discover";
import authStore from "../../stores/authStore";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  console.log("AUTH", authStore.user);
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="MyProfile"
        component={ProfileList}
        options={({ route }) => {
          const { user } = authStore;
          return {
            // title: user.username,
            headerLeft: () => <SignoutButton />,
          };
        }}
      />
      <Screen
        name="Discover"
        component={Discover}
        options={{ title: "Discover" }}
      />
      <Screen
        name="Trip Detail"
        component={TripDetail}
        options={({ route }) => {
          const { trip } = route.params;
          return {
            title: trip.destination,
          };
        }}
      />

      <Screen name="Home" component={Home} options={{ headerShown: false }} />
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
