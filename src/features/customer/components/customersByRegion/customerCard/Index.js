import { View, Text } from "react-native";
import React from "react";
import customerCardStyles from "./styles";
import Icon from "react-native-vector-icons/Fontisto";
import MIcon from "react-native-vector-icons/MaterialIcons";

const index = ({ firstName, lastName, active }) => {
  const styles = customerCardStyles(active);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="person" size={35} color={"#2D0C57"} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{firstName + " " + lastName}</Text>
        <Text style={styles.statusText}>{active ? "Active" : "In Active"}</Text>
      </View>
      <View style={styles.editContainer}>
        <MIcon name="edit" size={25} color={"#2D0C57"} />
      </View>
    </View>
  );
};

export default index;
