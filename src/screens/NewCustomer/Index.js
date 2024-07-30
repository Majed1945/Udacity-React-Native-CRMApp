import React from "react";
import {
  useNewCustomer,
  useCreateCustomerStatus,
} from "../../features/customer/hooks";
import CustomerForm from "../../components/Form/Index";
import { View } from "react-native";
const NewCustomer = () => {
  const { onSubmit } = useNewCustomer();
  const createCustomerStatus = useCreateCustomerStatus();

  return (
    <View style={{ flex: 1 }}>
      <CustomerForm
        handleSubmit={onSubmit}
        stateStatus={createCustomerStatus}
        customerID={null}
      />
    </View>
  );
};

export default NewCustomer;
