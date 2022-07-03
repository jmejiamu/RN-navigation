import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import TabNavigator from "./Tab";
import AuthNavigator from "./auth";

const AppNavigator = () => {
  const userId = useSelector((state) => state?.auth?.userId);
  console.log("🚀 ~ file: index.js ~ line 9 ~ AppNavigator ~ userId", userId);
  return (
    <NavigationContainer>
      {userId ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
