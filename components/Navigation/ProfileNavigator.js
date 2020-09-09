import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import TripDetail from "../TripDetail";
import Profile from "../Profile";

const { Navigator, Screen } = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Trip Detail"
        component={TripDetail}
        // options={({ route }) => {
        //   const { trip } = route.params;
        //   return {
        //     title: trip.destination,
        //   };
        // }}
      />
    </Navigator>
  );
};

export default ProfileNavigator;
