import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/index";
export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  preview: {
    width: "100%",
    height: 250,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
