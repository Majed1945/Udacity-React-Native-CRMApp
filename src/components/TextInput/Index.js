import { View, Text, TextInput } from "react-native";
import React from "react";
import textInputStyles from "./styles";
const Index = ({ value, onChangeText, placeholder, title, disabled }) => {
  const styles = textInputStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        editable={!disabled}
        selectTextOnFocus={!disabled}
      />
    </View>
  );
};

export default Index;
