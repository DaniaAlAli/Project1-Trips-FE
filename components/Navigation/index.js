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
import Discover from "../../Discover";

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
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="MyProfile"
        component={ProfileList}
        options={{ headerShown: false }}

        // {({ route }) => {
        //   const { user } = route.params;
        //   return {
        //     title: user.username,
        //   };
        // }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);
