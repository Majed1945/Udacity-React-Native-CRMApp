import { StyleSheet } from "react-native";
import theme from "../../../theme";

const headerStyles = () => {
  return {
    container: {
      backgroundColor: theme.colors.backGround,
    },
    headerContainer: {
      height: 200,
      backgroundColor: theme.colors.lightViolet,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      justifyContent: "center",
      paddingHorizontal: 15,
      paddingBottom: 40,
      width: "100%",
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#2D0C57",
    },
    descriptionText: {
      fontSize: 14,
      color: "#2D0C57",
    },
    backButtonContainer: {
      position: "absolute",
      left: 15,
      top: 30,
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.violet,
      justifyContent: "center",
      alignItems: "center",
    },
    backButtonIcon: {
      color: "#F6F5F5",
      fontSize: 20,
    },
    textContainer: {
      flex: 1,
      justifyContent: "flex-end",
      gap: 15,
    },
  };
};

export default StyleSheet.create(headerStyles);
