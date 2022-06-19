import { useFonts } from "expo-font";

import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Root from "./src";

const App = () => {
  const [loaded] = useFonts({
    "Oswald-Bold": require("./assets/fonts/Oswald-Bold.ttf"),
    "Oswald-Regular": require("./assets/fonts/Oswald-Regular.ttf"),
    "Oswald-Medium": require("./assets/fonts/Oswald-Medium.ttf"),
    "Oswald-ExtraLight": require("./assets/fonts/Oswald-ExtraLight.ttf"),
  });
  if (!loaded) {
    return <ActivityIndicator />;
  }

  return <Root />;
};

export default App;
