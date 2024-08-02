import { StyleSheet } from "react-native";
import theme from "../../../theme";

const welcomeStyles = () => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.primary.p300,
      justifyContent: "center",
    },
    lottieContainer: {
      flex: 3,
    },
    bottomContainer: {
      flex: 2,
      alignItems: "center",
      paddingHorizontal: 15,
      justifyContent: "space-between",
    },
    textContainer: {
      alignItems: "center",
      gap: 10,
    },
    welcomeText: {
      fontFamily: "Roboto-Italic",
      fontSize: 35,
      color: theme.secondary.main,
    },
    descriptionText: {
      fontFamily: "Roboto-Regular",
      fontSize: 17,
      color: theme.secondary.main,
      textAlign: "center",
    },
    bottomSectionButtonsBox: {
      width: "100%",
      gap: 10,
      position: "absolute",
      bottom: "10%",
    },
    buttonsContainer: {
      width: "100%",
      paddingBottom: 20,
    },
  };
};

export default StyleSheet.create(welcomeStyles);
