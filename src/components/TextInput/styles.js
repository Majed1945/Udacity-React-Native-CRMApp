import { StyleSheet } from "react-native";
import theme from "../../../theme";

const textInputStyles = (isFilled = false) => {
  return {
    container: {
      gap: 5,
      backgroundColor: theme.colors.backGround,
    },
    input: {
      height: 50,
      padding: 10,
      borderWidth: 1,
      borderRadius: 10,
    },
    titleText: {
      fontFamily: "Roboto-Regular",
      fontSize: 16,
    },
  };
};

export default StyleSheet.create(textInputStyles);
