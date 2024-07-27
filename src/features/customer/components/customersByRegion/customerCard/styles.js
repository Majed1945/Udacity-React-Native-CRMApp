import { StyleSheet } from "react-native";
import theme from "../../../../../../theme";

const customerCardStyles = (active = false) => {
  return {
    container: {
      backgroundColor: theme.colors.lightViolet,
      borderRadius: 12,
      flexDirection: "row",
      padding: 10,
      gap: 10,
    },
    textContainer: {
      justifyContent: "space-between",
      flex: 1,
    },
    iconContainer: {
      width: 50,
      height: 50,
      backgroundColor: "white",
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    nameText: {
      fontFamily: "Roboto-Medium",
      fontSize: 15,
    },
    statusText: {
      fontFamily: "Roboto-Regular",
      fontSize: 13,
      color: theme.colors.textPrimary,
    },
    editContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
  };
};

export default StyleSheet.create(customerCardStyles);
