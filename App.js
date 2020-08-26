
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Components
import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}