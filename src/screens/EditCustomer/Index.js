import React from "react";
import {
  useEditCustomerStatus,
  useEditCustomer,
} from "../../features/customer/hooks";
import CustomerForm from "../../components/Form/Index";
import { View } from "react-native";

const EditCustomer = ({ route }) => {
  const { customerID } = route.params;
  const { onSubmit } = useEditCustomer(customerID);
  const editCustomerStatus = useEditCustomerStatus();
  return (
    <View style={{ flex: 1 }}>
      <CustomerForm
        handleSubmit={onSubmit}
        stateStatus={editCustomerStatus}
        customerID={customerID}
      />
    </View>
  );
};

export default EditCustomer;
