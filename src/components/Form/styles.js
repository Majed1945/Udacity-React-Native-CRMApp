import { StyleSheet } from "react-native";
import theme from "../../../theme";

const formStyles = () => {
  return {
    container: {
      flex: 1,
      paddingHorizontal: 15,
      backgroundColor: "white",
    },
    formBox: {
      flex: 2,
      paddingTop: 18,
      gap: 18,
    },
    buttonsBox: {
      flex: 1,
      justifyContent: "flex-end",
      paddingBottom: 30,
    },
    validationText: {
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      color: theme.secondary.main,
    },
  };
};

export default StyleSheet.create(formStyles);
