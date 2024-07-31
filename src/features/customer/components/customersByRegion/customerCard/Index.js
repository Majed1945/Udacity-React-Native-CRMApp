import { View, Text } from "react-native";
import React from "react";
import customerCardStyles from "./styles";
import Icon from "react-native-vector-icons/Fontisto";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import theme from "../../../../../../theme";

const index = ({ firstName, lastName, active, id }) => {
  const { navigate } = useNavigation();
  const styles = customerCardStyles(active);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="person" size={35} color={theme.secondary.main} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{firstName + " " + lastName}</Text>
        <Text style={styles.statusText}>{active ? "Active" : "In Active"}</Text>
      </View>
      <View style={styles.editContainer}>
        <MIcon
          name="delete"
          size={20}
          color={theme.primary.main}
          onPress={() => navigate("Edit Customer", { customerID: id })}
        />
        <MIcon
          name="remove-red-eye"
          size={20}
          color={theme.primary.main}
          onPress={() => navigate("Edit Customer", { customerID: id })}
        />
        <MIcon
          name="edit"
          size={20}
          color={theme.primary.main}
          onPress={() => navigate("Edit Customer", { customerID: id })}
        />
      </View>
    </View>
  );
};

export default index;
