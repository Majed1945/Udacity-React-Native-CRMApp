import { Text, Pressable } from "react-native";
import React from "react";
import regionCardStyles from "./styles";
import { useNavigation } from "@react-navigation/native";

const RegionCard = ({ region }) => {
  const styles = regionCardStyles();
  const { navigate } = useNavigation();
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigate("Customers By Region", { region: region })}
    >
      <Text style={styles.cardText}>{region}</Text>
    </Pressable>
  );
};

export default RegionCard;
