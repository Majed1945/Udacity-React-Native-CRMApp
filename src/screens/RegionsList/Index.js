import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import regionsListStyles from "./styles";
import RegionsFlatList from "../../features/customer/components/regionsList/regionsFlatList/Index";
import CustomizedButton from "../../components/Button/Index";
import { useNavigation } from "@react-navigation/native";

const RegionsList = () => {
  const styles = regionsListStyles();
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <CustomizedButton
        text={"Create a Customer"}
        isFilled={true}
        onPress={() => navigate("New Customer")}
      />
      <Text style={styles.listOfRegionsText}>List of regions:</Text>
      <RegionsFlatList />
    </View>
  );
};

export default RegionsList;
