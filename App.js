import React from "react";
import { observer } from "mobx-react";
import { NavigationContainer } from "@react-navigation/native";

//Debugger in browser
// import ReactDOM from "react-dom";
// <script src="http://192.168.1.130:8097"></script>;

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
