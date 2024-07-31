import { StyleSheet } from "react-native";
import theme from "../../../theme";
const regionsListStyles = () => {
  return {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    compass: {
      width: 340,
      height: 340,
      borderRadius: 170,
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    compassCircle: {
      width: "90%",
      height: "90%",
      resizeMode: "contain",
    },
    createCustomerButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      margin: 10,
      backgroundColor: theme.primary.main,
      position: "absolute",
      bottom: 0,
      right: 0,
      justifyContent: "center",
      alignItems: "center",
    },
  };
};

export default StyleSheet.create(regionsListStyles);
