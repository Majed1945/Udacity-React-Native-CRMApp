import React from "react";
import {
  useNewCustomer,
  useCreateCustomerStatus,
} from "../../features/customer/hooks";
import CustomerForm from "../../components/Form/Index";

const NewCustomer = () => {
  const { onSubmit } = useNewCustomer();
  const createCustomerStatus = useCreateCustomerStatus();

  return (
    <CustomerForm
      handleSubmit={onSubmit}
      stateStatus={createCustomerStatus}
      customerID={null}
      disabled={false}
    />
  );
};

export default NewCustomer;
