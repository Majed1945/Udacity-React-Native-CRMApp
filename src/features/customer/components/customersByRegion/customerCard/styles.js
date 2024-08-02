import { StyleSheet } from "react-native";
import theme from "../../../../../../theme";

const customerCardStyles = () => {
  return {
    container: {
      backgroundColor: theme.primary.p300,
      borderRadius: 12,
      flexDirection: "row",
      padding: 10,
      gap: 10,
      marginBottom: 10,
      borderLeftWidth: 3,
      borderColor: theme.primary.p200,
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
      fontFamily: "Roboto-Italic",
      fontSize: 15,
      color: theme.secondary.main,
    },
    statusText: {
      fontFamily: "Roboto-Regular",
      fontSize: 13,
      color: theme.secondary.main,
    },
    editContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
  };
};

export default StyleSheet.create(customerCardStyles);
