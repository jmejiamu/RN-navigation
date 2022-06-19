import React from "react";
import { isAndroid, isIOS } from "../constants/utils";
import { colors } from "../constants/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import MainNavigator from "./main";

import ArtNavigator from "./art";
import { Text } from "react-native";

const BottomTabs = createBottomTabNavigator();

const LabelBottomTab = (focused, label) => (
  <Text
    style={{
      color: focused ? colors.primary : colors.secondary,
      fontFamily: focused ? "Oswald-Bold" : "Oswald-ExtraLight",
    }}
  >
    {label}
  </Text>
);

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="LandScapeScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: isIOS ? colors.primary : colors.secondary,
        },
        headerTintColor: isAndroid ? colors.white : colors.black,
        headerTitleStyle: {
          fontFamily: "Oswald-Bold",
        },
      }}
    >
      <BottomTabs.Screen
        name="LandScape"
        component={MainNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab(focused, "Land Scape"),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "earth" : "earth-outline"}
              size={26}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ArtTab"
        component={ArtNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab(focused, "Art"),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "image" : "image-outline"}
              size={26}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigator;
