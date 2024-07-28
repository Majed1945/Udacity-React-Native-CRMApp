import { StyleSheet } from "react-native";
import theme from "../../../../../../theme";

const regionCardStyles = () => {
  return {
    card: {
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 16,
      marginBottom: 10,

      borderLeftWidth: 5,
      borderColor: theme.colors.darkViolet,
    },
    cardText: {
      fontSize: 16,
      fontFamily: "Roboto-MediumItalic",
      color: theme.colors.textPrimary,
      textAlign: "center",
    },
  };
};

export default StyleSheet.create(regionCardStyles);
