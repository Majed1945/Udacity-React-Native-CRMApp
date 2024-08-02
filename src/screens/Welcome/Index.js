import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../../components/Button/Index";
import welcomeStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useClearCustomers } from "../../features/customer/hooks";

const Welcome = () => {
  const styles = welcomeStyles();
  const { navigate } = useNavigation();
  const { onSubmit } = useClearCustomers();
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
          <CustomButton text={"Clear"} isFilled={false} onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
