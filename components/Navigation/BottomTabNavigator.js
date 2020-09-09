import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";

//Components
import ProfileNavigator from "./ProfileNavigator";
import DiscoverNavigator from "./DiscoverNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation, route }) => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          onPress: () => navigation.navigate("Profile"),
          tabBarIcon: () => <Icon name="user-astronaut" type="FontAwesome5" />,
        }}
      />
      <Screen
        name="Discover"
        component={DiscoverNavigator}
        options={{
          onPress: () => navigation.navigate("Discover"),
          tabBarIcon: () => <Icon name="world" type="Fontisto" />,
        }}
      />
    </Navigator>
  );
};

export default BottomTabNavigator;
