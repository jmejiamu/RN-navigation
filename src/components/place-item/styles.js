import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/index";

export const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: colors.secondary,
  },
  info: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
  address: {
    fontSize: 14,
    color: colors.primary,
  },
});
