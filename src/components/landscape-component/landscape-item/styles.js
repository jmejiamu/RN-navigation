import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

export const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 120,
  },
  item: {
    flex: 1,
    borderRadius: 10,
    shadowColor: colors.shadow,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontFamily: "OpenSans-Bold",
  },
  image: {
    width: 100,
    height: 100,
  },
});
