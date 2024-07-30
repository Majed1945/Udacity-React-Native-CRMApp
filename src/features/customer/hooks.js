import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";
import { useEffect } from "react";
import { PENDING } from "../../utilities/helpers";
import Toast from "react-native-toast-message";

export const useShowToast = (type = "success", text1 = "", text2 = "") => {
  Toast.show({ type, text1, text2 });
};
export const useUpdateFormFields = (customerID = null) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.customer.edit.status);
  const fields = useSelector((state) => state.customer.form.fields);

  useEffect(() => {
    if (status === PENDING && customerID) {
      dispatch(actions.setForm(customerID));
    }
  }, [customerID, status]);

  return {
    fields,
    setFormField: (field, value) => {
      dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();
  return {
    onSubmit: () => {
      dispatch(actions.createCustomer());
    },
  };
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();
  return {
    onSubmit: () => {
      dispatch(actions.editCustomer(customerID));
    },
  };
};

export const useCreateCustomerStatus = () => {
  return useSelector((state) => state.customer.create.status);
};

export const useEditCustomerStatus = () => {
  return useSelector((state) => state.customer.edit.status);
};

export const useListCustomers = () => {
  return useSelector((state) => state.customer.list.customers);
};
