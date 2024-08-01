import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import CustomerCard from "../../features/customer/components/customersByRegion/customerCard/Index";
import { useListCustomers } from "../../features/customer/hooks";
import customerByRegionStyles from "./styles";
import CustomButton from "../../components/Button/Index";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const CustomersByRegion = ({ route }) => {
  const styles = customerByRegionStyles();
  const { region } = route.params;
  const customers = useListCustomers();
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      {customers?.filter((customer) => customer.region === region).length ===
      0 ? (
        <>
          <LottieView
            source={require("../../../assets/lotties/search.json")}
            style={{ width: "100%", height: "85%" }}
            autoPlay
            loop
          />
          <CustomButton
            text={"Create a Customer"}
            isFilled={true}
            onPress={() => navigate("New Customer")}
          />
        </>
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
