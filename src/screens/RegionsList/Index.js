import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import regionsListStyles from "./styles";
import RegionsFlatList from "../../features/customer/components/regionsList/regionsFlatList/Index";
import CreateCustomerButton from "../../features/customer/components/regionsList/createCustomerButton/Index";
import { useNavigation } from "@react-navigation/native";

const RegionsList = () => {
  const styles = regionsListStyles();
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <CreateCustomerButton
        text={"Create a Customer"}
        onPress={() => navigate("New Customer")}
      />
      <Text style={styles.listOfRegionsText}>List of regions:</Text>
      <RegionsFlatList />
    </View>
  );
};

export default RegionsList;
