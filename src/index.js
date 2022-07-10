import { View } from "react-native";

import { styles } from "./styles";
import AppNavigator from "./navigation/index";
import { init } from "./db";
export default function Root() {
  init()
    .then(() => {
      console.log("DB initialized");
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}
