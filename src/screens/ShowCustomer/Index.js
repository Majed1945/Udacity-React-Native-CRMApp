import React from "react";
import CustomerForm from "../../components/Form/Index";
import { useNavigation } from "@react-navigation/native";

const ShowCustomer = ({ route }) => {
  const navigation = useNavigation();
  const { customerID } = route.params;

  return (
    <CustomerForm
      handleSubmit={() => navigation.goBack()}
      customerID={customerID}
      disabled={true}
    />
  );
};

export default ShowCustomer;
