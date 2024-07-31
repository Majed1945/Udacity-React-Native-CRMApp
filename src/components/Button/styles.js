import { StyleSheet } from "react-native";
import theme from "../../../theme";

const buttonStyles = (isFilled = false, disabled = false) => {
  return {
    buttonContainer: {
      backgroundColor: isFilled
        ? disabled
          ? theme.primary.p400
          : theme.primary.main
        : "white",
      borderRadius: 8,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
    },
    buttonText: {
      fontFamily: "Roboto-Medium",
      fontSize: 16,
      color: isFilled ? "white" : theme.gray.g500,
    },
    buttonContainerDisabled: {
      backgroundColor: isFilled ? theme.primary.p400 : "white",
    },
  };
};

export default StyleSheet.create(buttonStyles);
