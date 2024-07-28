import { StyleSheet } from "react-native";
import theme from "../../../theme";

const editCustomerStyles = () => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.backGround,
      paddingHorizontal: 20,
      paddingTop: 40,
      gap: 20,
    },
    buttonsBox: {
      flex: 1,
      gap: 10,
      justifyContent: "flex-end",
    },
  };
};

export default StyleSheet.create(editCustomerStyles);
