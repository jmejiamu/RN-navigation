import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../constants/theme";
import { isAndroid, isIOS } from "../constants/utils";
import Art from "../screens/art";

const Stack = createNativeStackNavigator();

const ArtNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Art"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.primary : colors.secondary,
        },
        headerTintColor: isAndroid ? colors.white : colors.black,
        headerTitleStyle: {
          fontFamily: "Oswald-Bold",
        },
      }}
    >
      <Stack.Screen name="Art" component={Art} />
    </Stack.Navigator>
  );
};

export default ArtNavigator;
