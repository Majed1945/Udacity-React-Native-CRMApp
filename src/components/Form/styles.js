import { StyleSheet } from "react-native";
import theme from "../../../theme";

const formStyles = () => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.backGround,
      paddingHorizontal: 20,
    },
    formBox: {
      flex: 2,
      paddingTop: 18,
      gap: 18,
    },
    buttonsBox: {
      flex: 1,
      justifyContent: "flex-end",
      paddingBottom: 40,
    },
  };
};

export default StyleSheet.create(formStyles);
