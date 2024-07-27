import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import buttonStyles from "./styles";

const Index = ({ text, isFilled }) => {
  const styles = buttonStyles(isFilled);

  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Index;
