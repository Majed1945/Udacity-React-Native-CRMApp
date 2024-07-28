import { View, Text, TextInput } from "react-native";
import React from "react";
import textInputStyles from "./styles";
const Index = ({ value, onChangeText, placeholder, title }) => {
  const styles = textInputStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Index;
