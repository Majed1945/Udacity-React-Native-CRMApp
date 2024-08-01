import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import theme from "./theme";
import { StyleSheet, Text, View } from "react-native";
import SuccessIcon from "react-native-vector-icons/AntDesign";
import ErrorIcon from "react-native-vector-icons/MaterialIcons";

// Styles
const getStyles = (theme, type) => {
  const isSuccess = type === "success";
  return StyleSheet.create({
    container: {
      width: "90%",
      backgroundColor: isSuccess ? theme.success.light : theme.error.light,
      padding: 15,
      borderRadius: 10,
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      borderLeftColor: isSuccess ? theme.success.main : theme.error.main,
      borderLeftWidth: 5,
    },
    text1: {
      fontSize: 15,
      fontWeight: "500",
      color: isSuccess ? theme.success.main : theme.error.main,
    },
    text2: {
      fontSize: 13,
      color: isSuccess ? theme.success.dark : theme.error.dark,
    },
  });
};

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: theme.success.main,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "500",
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: theme.error.main }}
      text1Style={{
        fontSize: 15,
        fontWeight: "500",
      }}
    />
  ),
  customSuccess: ({ props, text1, text2 }) => {
    const styles = getStyles(theme, "success");
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>{text1}</Text>
        {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
        <SuccessIcon name="checkcircleo" size={15} color={theme.success.main} />
      </View>
    );
  },
  customError: ({ props, text1, text2 }) => {
    const styles = getStyles(theme, "error");
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>{text1}</Text>
        {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
        <ErrorIcon name="error-outline" size={15} color={theme.error.main} />
      </View>
    );
  },
};
