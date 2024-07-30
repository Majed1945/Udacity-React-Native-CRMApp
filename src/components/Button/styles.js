import { StyleSheet } from "react-native";
import theme from "../../../theme";

const buttonStyles = (isFilled = false, disabled = false) => {
  return {
    buttonContainer: {
      backgroundColor: isFilled
        ? disabled
          ? theme.colors.lightViolet
          : theme.colors.violet
        : theme.colors.backGround,
      borderRadius: 8,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
    },
    buttonText: {
      fontFamily: "Roboto-Medium",
      fontSize: 16,
      color: isFilled ? "white" : theme.colors.textSecondary,
    },
    buttonContainerDisabled: {
      backgroundColor: isFilled
        ? theme.colors.lightViolet
        : theme.colors.backGround,
    },
  };
};

export default StyleSheet.create(buttonStyles);
