import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.btnColor,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 8,
  },
  title: {
    color: colors.primary,
  },
});
