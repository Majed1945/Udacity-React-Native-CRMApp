import { View, Text, FlatList } from "react-native";
import React from "react";
import CustomerCard from "../../features/customer/components/customersByRegion/customerCard/Index";
import { useListCustomers } from "../../features/customer/hooks";
import customerByRegionStyles from "./styles";
import CustomButton from "../../components/Button/Index";
import { useNavigation } from "@react-navigation/native";
const CustomersByRegion = ({ route }) => {
  const styles = customerByRegionStyles();
  const { region } = route.params;
  const customers = useListCustomers();
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      {customers.filter((customer) => customer.region === region).length ===
      0 ? (
        <View style={styles.noCustomersBox}>
          <Text style={styles.noCustomersText}>
            No customers at this region
          </Text>
          <CustomButton
            text={"Create a Customer"}
            isFilled={true}
            onPress={() => navigate("New Customer")}
          />
        </View>
      ) : (
        <FlatList
          data={customers}
          renderItem={({ item }) =>
            item.region === region && (
              <CustomerCard
                firstName={item.firstName}
                lastName={item.lastName}
                active={item.status}
                id={item.id}
              />
            )
          }
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default CustomersByRegion;
