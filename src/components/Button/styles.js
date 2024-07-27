import { StyleSheet } from "react-native";
import theme from "../../../theme";

const buttonStyles = (isFilled = false) => {
  return {
    buttonContainer: {
      backgroundColor: isFilled ? theme.colors.green : theme.colors.backGround,
      borderRadius: 8,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: 60,
    },
    buttonText: {
      fontFamily: "Roboto-Medium",
      fontSize: 16,
      color: isFilled ? "white" : theme.colors.textSecondary,
    },
  };
};

export default StyleSheet.create(buttonStyles);
