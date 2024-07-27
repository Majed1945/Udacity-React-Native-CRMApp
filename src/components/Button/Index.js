import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import buttonStyles from "./styles";

const Index = ({ text, isFilled, onPress }) => {
  const styles = buttonStyles(isFilled);

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Index;
