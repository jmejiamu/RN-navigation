import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  LandScapeScreen,
  LandScapeDetailsScreen,
  DetailsScreen,
  MapScreen,
  NewPlaceSreen,
  PlaceDetailScreen,
  PlaceListScreen,
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
          title: route?.params?.name,
        })}
      />
      <Stack.Screen
        name="LandScapeDetailsScreen"
        component={PlaceListScreen}
        options={({ route, navigation }) => ({
          title: route?.params?.name,
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
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={{ title: "Detalle de Dirección" }}
      />
      <Stack.Screen
        name="NewPlace"
        component={NewPlaceSreen}
        options={{ title: "Nueva Dirección" }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Mapa" }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
