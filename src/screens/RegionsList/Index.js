import { View, Image, Pressable, Alert } from "react-native";
import React from "react";
import regionsListStyles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import compassImage from "../../../assets/images/compassImage.png";
const RegionsList = () => {
  const styles = regionsListStyles();
  const { navigate } = useNavigation();

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const centerX = styles.compass.width / 2;
    const centerY = styles.compass.height / 2;

    // Calculate relative click position
    const x = locationX - centerX;
    const y = locationY - centerY;

    // Determine direction and angle
    const distanceFromCenter = Math.sqrt(x * x + y * y);
    const radius = styles.compass.width / 2;

    let direction = "";

    // Check if click is near the center
    if (distanceFromCenter < radius * 0.2) {
      direction = "Central";
    } else {
      const angle = Math.atan2(y, x) * (180 / Math.PI);
      const adjustedAngle = (angle + 360) % 360; // Adjust angle to be in the range [0, 360)

      if (adjustedAngle >= 337.5 || adjustedAngle < 22.5) {
        direction = "East";
      } else if (adjustedAngle >= 22.5 && adjustedAngle < 67.5) {
        direction = "South East";
      } else if (adjustedAngle >= 67.5 && adjustedAngle < 112.5) {
        direction = "South";
      } else if (adjustedAngle >= 112.5 && adjustedAngle < 157.5) {
        direction = "South West";
      } else if (adjustedAngle >= 157.5 && adjustedAngle < 202.5) {
        direction = "West";
      } else if (adjustedAngle >= 202.5 && adjustedAngle < 247.5) {
        direction = "North West";
      } else if (adjustedAngle >= 247.5 && adjustedAngle < 292.5) {
        direction = "North";
      } else if (adjustedAngle >= 292.5 && adjustedAngle < 337.5) {
        direction = "North East";
      }
    }
    navigate("Customers By Region", { region: direction });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress} style={styles.compass}>
        <Image style={styles.compassCircle} source={compassImage} />
      </Pressable>
      <Pressable
        style={styles.createCustomerButton}
        onPress={() => navigate("New Customer")}
      >
        <Icon name="adduser" size={30} color={"white"} />
      </Pressable>
    </View>
  );
};

export default RegionsList;
