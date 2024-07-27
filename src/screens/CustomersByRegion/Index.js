import { View, Text } from "react-native";
import React from "react";
import CustomerCard from "../../features/customer/components/customersByRegion/customerCard/Index";

const CustomersByRegion = ({ route }) => {
  const { region } = route.params;
  return (
    <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 10 }}>
      <CustomerCard firstName={"Majed"} lastName={"Biazid"} active={true} />
    </View>
  );
};

export default CustomersByRegion;
