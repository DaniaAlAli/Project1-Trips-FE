import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

//components
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import TripDetail from "../TripDetail";
import Profile from "../Profile";
import SignoutButton from "../buttons/SignoutButton";
import Discover from "../../Discover/";
import OtherProfile from "../Profile/OtherProfile";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Discover"
        component={Discover}
        options={{ title: "Discover" }}
      />
      <Screen name="Other Profile" component={OtherProfile} />
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

      <Screen
        name="MyProfile"
        component={Profile}
        options={({ route }) => {
          const { user } = route.params;
          return {
            title: user.username,
            headerLeft: () => <SignoutButton />,
          };
        }}
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
