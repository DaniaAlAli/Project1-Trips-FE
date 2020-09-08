import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Discover from "../../Discover";
import TripDetail from "../TripDetail";
import Profile from "../Profile";

const { Navigator, Screen } = createStackNavigator();

const DiscoverNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Discover"
        component={Discover}
        options={{ headerShown: false }}
      />
      <Screen name="Trip Detail" component={TripDetail} />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default DiscoverNavigator;
