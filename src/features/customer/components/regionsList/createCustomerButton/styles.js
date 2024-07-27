import { StyleSheet } from "react-native";
import theme from "../../../../../../theme";

const createCustomerButtonStyles = () => {
  return {
    button: {
      backgroundColor: theme.colors.darkViolet,
      borderRadius: 12,
      paddingVertical: 15,
      paddingHorizontal: 20,
      marginVertical: 10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 5 },
      elevation: 5,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontFamily: "Roboto-Italic",
    },
  };
};

export default StyleSheet.create(createCustomerButtonStyles);
