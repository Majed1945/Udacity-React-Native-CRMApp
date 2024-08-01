import { View, Text } from "react-native";
import React from "react";
import showCustomerStyles from "./styles";
import CustomerForm from "../../components/Form/Index";
import { useNavigation } from "@react-navigation/native";
const ShowCustomer = ({ route }) => {
  const styles = showCustomerStyles();
  const { navigate } = useNavigation();
  const { customerID } = route.params;
  return (
    <CustomerForm
      handleSubmit={() => navigate("Regions List")}
      customerID={customerID}
      disabled={true}
    />
  );
};

export default ShowCustomer;
