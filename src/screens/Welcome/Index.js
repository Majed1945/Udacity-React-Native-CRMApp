import { View, Text, Image, Button } from "react-native";
import React from "react";
import CustomButton from "../../components/Button/Index";
import splashImage from "../../../assets/images/splashImage.png";
import Icon from "react-native-vector-icons/Ionicons";
import welcomeStyles from "./styles";

const Welcome = () => {
  const styles = welcomeStyles();

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          source={splashImage}
          alt="splash image"
          style={{ width: "100%", objectFit: "fill" }}
        />
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.bottomSectionCircle}>
          <Icon name="person" size={50} color={"#2D0C57"} />
        </View>
        <Text style={styles.bottomSectionTitle}>Welcome Admin!</Text>
        <Text style={styles.bottomSectionText}>
          Please select start to start the experience, or clear to clear the
          device storage.
        </Text>
        <View style={styles.bottomSectionButtonsBox}>
          <CustomButton text={"START"} isFilled={true} />
          <CustomButton text={"CLEAR"} isFilled={false} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
