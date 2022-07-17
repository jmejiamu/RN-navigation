import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/index";

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ad2d4c",
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderRadius: 10,
    backgroundColor: "#8c2941",
  },
  title: {
    fontSize: 16,
    fontFamily: "Oswald-Bold",
    marginBottom: 12,
    textAlign: "center",
    color: colors.text,
  },
  label: {
    fontSize: 14,
    fontFamily: "Oswald-Medium",
    marginVertical: 10,
    color: colors.text,
  },
  input: {
    height: 40,
    borderBottomColor: colors.btnColor,
    borderBottomWidth: 1,
    width: "100%",
    fontFamily: "Oswald-Bold",
  },
  prompt: {
    paddingVertical: 20,
    alignItems: "center",
  },
  promptMessage: {
    fontSize: 14,
    fontFamily: "Oswald-Bold",
    color: colors.text,
  },
  promtButton: {
    fontSize: 14,
    fontFamily: "Oswald-Bold",
    color: colors.primary,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
  },
});
