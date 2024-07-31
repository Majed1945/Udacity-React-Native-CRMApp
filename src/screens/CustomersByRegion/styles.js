import { StyleSheet } from "react-native";
import theme from "../../../theme";

const customerByRegionStyles = () => {
  return {
    container: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 20,
      gap: 10,
      backgroundColor: "white",
    },
    noCustomersBox: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    noCustomersText: {
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      color: theme.secondary.main,
    },
  };
};

export default StyleSheet.create(customerByRegionStyles);
