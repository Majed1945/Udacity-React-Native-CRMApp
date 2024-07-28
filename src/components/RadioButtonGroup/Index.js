import { View, Text } from "react-native";
import React from "react";
import RadioGroup from "react-native-radio-buttons-group";
import radioGroupStyles from "./styles";
const Index = ({ radioButtons, selectedId, setSelectedId, title }) => {
  const styles = radioGroupStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        containerStyle={styles.radioGroup}
      />
    </View>
  );
};

export default Index;
