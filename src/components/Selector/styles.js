import { StyleSheet } from "react-native";
import theme from "../../../theme";
const selectorStyles = (isFilled = false) => {
  return {
    container: {
      gap: 5,
      backgroundColor: theme.colors.backGround,
    },
    titleText: {
      fontFamily: "Roboto-Regular",
      fontSize: 16,
    },
    picker: {
      backgroundColor: "#fff",
      borderColor: theme.colors.lightGray,
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
    },
    pickerInput: {
      fontSize: 16,
      borderWidth: 1,
      borderRadius: 4,
      color: "black",
      padding: 10,
      margin: 0,
    },
    iconContainer: {
      top: 15,
      right: 10,
    },
    icon: {
      fontSize: 20,
      color: "gray",
    },
  };
};

export default StyleSheet.create(selectorStyles);
