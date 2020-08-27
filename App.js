import React from "react";
import { observer } from "mobx-react";
import { NavigationContainer } from "@react-navigation/native";

// Components
import RootNavigator from "./components/Navigation";

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default observer(App);
