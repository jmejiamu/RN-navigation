import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme/index";

export const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    padding: 10,
    marginHorizontal: 25,
    marginVertical: 10,
    borderRadius: 10,
    // backgroundColor: colors.primary,
    borderWidth: 4,
    borderColor: colors.primary,
    height: 200,
  },
  item: {
    flex: 1,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "Oswald-Bold",
    fontSize: 18,
    textAlign: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailText: {
    fontFamily: "Oswald-Regular",
    fontSize: 14,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});
