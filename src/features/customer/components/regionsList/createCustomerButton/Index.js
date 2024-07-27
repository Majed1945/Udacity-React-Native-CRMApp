import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";
import createCustomerButtonStyles from "./styles";

const CreateCustomerButton = ({ text, onPress }) => {
  const styles = createCustomerButtonStyles();
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default CreateCustomerButton;
