import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  LandScapeScreen,
  LandScapeDetailsScreen,
  DetailsScreen,
} from "../screens/index";
import { isAndroid, isIOS } from "../constants/utils";
import { colors } from "../constants/theme";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LandScapeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.primary : colors.secondary,
        },
        headerTintColor: isAndroid ? colors.white : colors.black,
        headerTitleStyle: {
          fontFamily: "OpenSans-Bold",
        },
        title: "Landscape",
      }}
    >
      <Stack.Screen name="LandScapeScreen" component={LandScapeScreen} />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="LandScapeDetailsScreen"
        component={LandScapeDetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
