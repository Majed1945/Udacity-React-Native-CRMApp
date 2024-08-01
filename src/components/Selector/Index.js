import { View, Text } from "react-native";
import React from "react";
import RNPickerSelect from "react-native-picker-select";
import selectorStyles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";

const Index = ({ title, selectedValue, onChange, disabled }) => {
  const styles = selectorStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <RNPickerSelect
        onValueChange={onChange}
        disabled={disabled}
        items={[
          { label: "North", value: "North" },
          { label: "South", value: "South" },
          { label: "East", value: "East" },
          { label: "West", value: "West" },
          { label: "South West", value: "South West" },
          { label: "South East", value: "South East" },
          { label: "North West", value: "North West" },
          { label: "North East", value: "North East" },
          { label: "Central", value: "Central" },
        ]}
        value={selectedValue}
        style={{
          inputIOS: styles.pickerInput,
          inputAndroid: styles.pickerInput,
          iconContainer: styles.iconContainer,
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => {
          return <Icon name="down" style={styles.icon} />;
        }}
      />
    </View>
  );
};

export default Index;
