import { useFonts } from "expo-font";

import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import Root from "./src";
import store from "./src/store";

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

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
