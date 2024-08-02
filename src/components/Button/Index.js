import { TouchableOpacity, Text } from "react-native";
import React from "react";
import buttonStyles from "./styles";

const Index = ({ text, isFilled, onPress, disabled }) => {
  const styles = buttonStyles(isFilled, disabled);

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Index;
