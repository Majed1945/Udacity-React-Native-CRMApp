import { StyleSheet } from "react-native";
import theme from "../../../theme";
const selectorStyles = (isFilled = false) => {
  return {
    container: {
      gap: 5,
    },
    titleText: {
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      color: theme.secondary.main,
    },
    pickerInput: {
      fontSize: 16,
      borderWidth: 1,
      color: "black",
      padding: 10,
      margin: 0,
      borderRadius: 12,
      borderColor: theme.gray.g200,
    },
    iconContainer: {
      top: 16,
      right: 10,
    },
    icon: {
      fontSize: 20,
      borderColor: theme.gray.g200,
    },
  };
};

export default StyleSheet.create(selectorStyles);
