import { View, Text, Alert } from "react-native";
import React from "react";
import customerCardStyles from "./styles";
import Icon from "react-native-vector-icons/Fontisto";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import theme from "../../../../../../theme";
import { useDeleteCustomer } from "../../../hooks";

const CustomerCard = ({ firstName, lastName, status, id }) => {
  const { navigate } = useNavigation();
  const styles = customerCardStyles();
  const { onSubmit } = useDeleteCustomer(id);
  const handleDelete = () => {
    Alert.alert(
      "Delete Confirmation",
      "Are you sure you want to delete this customer?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: onSubmit,
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="person" size={35} color={theme.secondary.main} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{firstName + " " + lastName}</Text>
        <Text style={styles.statusText}>
          {status === "Active" ? "Active" : "InActive"}
        </Text>
      </View>
      <View style={styles.editContainer}>
        <MIcon
          name="delete"
          size={20}
          color={theme.primary.main}
          onPress={handleDelete}
        />
        <MIcon
          name="remove-red-eye"
          size={20}
          color={theme.primary.main}
          onPress={() => navigate("Show Customer", { customerID: id })}
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

export default CustomerCard;
