import { StyleSheet } from "react-native";
import theme from "../../../theme";

const regionsListStyles = () => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.backGround,
      marginHorizontal: 20,
      marginVertical: 10,
      gap: 12,
    },
    listOfRegionsText: {
      fontFamily: "Roboto-Medium",
      fontSize: 20,
      color: theme.colors.textPrimary,
    },
  };
};

export default StyleSheet.create(regionsListStyles);
