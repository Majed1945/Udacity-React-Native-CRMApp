import { StyleSheet } from "react-native";
import theme from "../../../../../../theme";

const regionCardStyles = () => {
  return {
    card: {
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 20,
      marginBottom: 10,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 0 },
      elevation: 3,
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
