import { StyleSheet } from "react-native";
import theme from "../../../theme";

const customerByRegionStyles = () => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.backGround,
      paddingHorizontal: 20,
      paddingVertical: 10,
      gap: 10,
    },
    noCustomersBox: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    noCustomersText: {
      fontFamily: "Roboto-Medium",
      fontSize: 16,
    },
  };
};

export default StyleSheet.create(customerByRegionStyles);
