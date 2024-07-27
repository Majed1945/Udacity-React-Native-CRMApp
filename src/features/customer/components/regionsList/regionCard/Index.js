import { Text, Pressable } from "react-native";
import React from "react";
import regionCardStyles from "./styles";

const RegionCard = ({ region }) => {
  const styles = regionCardStyles();

  return (
    <Pressable style={styles.card} onPress={() => console.warn("pressesd")}>
      <Text style={styles.cardText}>{region}</Text>
    </Pressable>
  );
};

export default RegionCard;
