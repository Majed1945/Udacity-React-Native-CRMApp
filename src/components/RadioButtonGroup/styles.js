import { StyleSheet } from "react-native";
import theme from "../../../theme";
const radioGroupStyles = (isFilled = false) => {
  return {
    container: {
      gap: 5,
    },
    input: {
      height: 50,
      padding: 10,
      borderWidth: 2,
      borderRadius: 10,
    },
    titleText: {
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      color: theme.secondary.main,
    },
    radioGroup: {
      flexDirection: "row",
    },
  };
};

export default StyleSheet.create(radioGroupStyles);
