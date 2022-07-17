import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "Oswald-Bold",
  },
  message: {
    paddingVertical: 5,
  },
  helperText: {
    fontFamily: "Oswald-Bold",
    fontSize: 14,
    color: colors.secondary,
  },
});
