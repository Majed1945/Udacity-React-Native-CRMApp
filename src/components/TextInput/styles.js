import { StyleSheet } from "react-native";
import theme from "../../../theme";

const textInputStyles = (isFilled = false) => {
  return {
    container: {
      gap: 5,
    },
    input: {
      height: 50,
      padding: 10,
      borderRadius: 12,
      borderColor: theme.gray.g200,
      borderWidth: 1,
    },
    titleText: {
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      color: theme.secondary.main,
    },
  };
};

export default StyleSheet.create(textInputStyles);
