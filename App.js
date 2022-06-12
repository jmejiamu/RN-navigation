import { useFonts } from "expo-font";

import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Root from "./src";

const App = () => {
  const [loaded] = useFonts({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-BoldItalic": require("./assets/fonts/OpenSans-BoldItalic.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  if (!loaded) {
    return <ActivityIndicator />;
  }

  return <Root />;
};

export default App;
