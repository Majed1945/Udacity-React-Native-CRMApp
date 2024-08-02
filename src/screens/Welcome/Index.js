import { View, Text, Image, Button } from "react-native";
import React from "react";
import CustomButton from "../../components/Button/Index";
import splashImage from "../../../assets/images/splashImage.png";
import Icon from "react-native-vector-icons/Ionicons";
import welcomeStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { clear } from "../../utilities/asyncStorage";
import LottieView from "lottie-react-native";

const Welcome = () => {
  const styles = welcomeStyles();
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          source={require("../../../assets/lotties/welcome.json")}
          style={{ width: "100%", height: "100%" }}
          autoPlay
          loop
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome agent!</Text>
          <Text style={styles.descriptionText}>
            Please select start to begin the journey or clear to clear device
            storage.
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <CustomButton
            text={"Start!"}
            isFilled={true}
            onPress={() => navigate("Regions List")}
          />
          <CustomButton
            text={"Clear"}
            isFilled={false}
            onPress={() => clear()}
          />
        </View>
      </View>
    </View>
  );
};

{
  /* <View style={styles.container}>
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
    <CustomButton
      text={"START"}
      isFilled={true}
      onPress={() => navigate("Regions List")}
    />
    <CustomButton
      text={"CLEAR"}
      isFilled={false}
      onPress={() => clear()}
    />
  </View>
</View>
</View> */
}
export default Welcome;
