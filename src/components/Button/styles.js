import { StyleSheet } from "react-native";
import theme from "../../../theme";

const buttonStyles = (isFilled = false, disabled = false) => {
  return {
    buttonContainer: {
      backgroundColor: isFilled
        ? disabled
          ? theme.primary.p400
          : theme.primary.main
        : theme.primary.p300,
      borderRadius: 8,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
    },
    buttonText: {
      fontFamily: "Roboto-Medium",
      fontSize: 16,
      color: isFilled ? "white" : theme.secondary.main,
    },
    buttonContainerDisabled: {
      backgroundColor: isFilled ? theme.primary.p400 : theme.primary.p300,
    },
  };
};

export default StyleSheet.create(buttonStyles);
