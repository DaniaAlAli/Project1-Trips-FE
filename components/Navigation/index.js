import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

//components

import Home from "../Home";
//import TripList from "../TripList";
// import AddTrip from "../AddTrip";
// import TripDetail from "../TripDetail";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      {/* <Screen
        name="Trips"
        // component={TripList}
        options={{
          headerStyle: {
            backgroundColor: "#74c66f",
          },
          title: "Choose a Trip",
          headerTitleStyle: {
            color: "white",
          },
        }}
      /> */}
      {/* <Screen
        name="Trip Detail"
        //  component={TripDetail}
        options={{
          headerStyle: {
            backgroundColor: "#42d4f2",
          },
          headerTitle: () => <TripTitle />,
        }}
      /> */}
      {/* <Screen
        name="AddTrip"
        // component={AddTrip}
        options={{
          headerStyle: {
            backgroundColor: "#42d4f2",
          },
          title: "Add a Trip",
          headerTitleStyle: {
            color: "white",
          },
        }}
      /> */}
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
