import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  LandScapeScreen,
  LandScapeDetailsScreen,
  DetailsScreen,
} from "../screens/index";
import { isAndroid, isIOS } from "../constants/utils";
import { colors } from "../constants/theme";
import { TouchableOpacity } from "react-native";
import IonicIcons from "@expo/vector-icons/Ionicons";
import NewLandscapeScreen from "../screens/new-landscape";

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
          fontFamily: "Oswald-Bold",
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
        options={({ route, navigation }) => ({
          title: route.params.name,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("NewLandscapeScreen")}
            >
              <IonicIcons
                name="add-circle-outline"
                size={30}
                color={colors.black}
              />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="NewLandscapeScreen"
        component={NewLandscapeScreen}
        options={({ route }) => ({
          title: route?.params?.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
