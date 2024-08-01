import { StyleSheet } from "react-native";
import theme from "../../../theme";

const showCustomerStyles = () => {
  return {
    container: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 20,
      gap: 10,
      backgroundColor: "white",
    },
  };
};

export default StyleSheet.create(showCustomerStyles);
