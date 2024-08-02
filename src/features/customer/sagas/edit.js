import { put, select, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";
import { useShowToast } from "../hooks";
import { set } from "../../../utilities/asyncStorage";

export function* watchEditCustomer() {
  yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer(action) {
  const customerID = action.payload;
  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customers = yield select((state) => state.customer.list.customers);
    const result = customers.map((customer) => {
      // if customer is not the one being updated, return it unchanged
      if (customer.id !== customerID) return customer;

      // otherwise, customer is the one being updated
      // return the new fields instead of the old ones
      return { ...customer, ...fields };
    });
    yield set("Customers", JSON.stringify(result));
    yield delay(1000);
    yield put(actions.editCustomerResult(result));

    useShowToast(
      (type = "customSuccess"),
      (text1 = "User successfully edited!")
    );
  } catch (error) {
    yield put(actions.editCustomerError(error.toString()));

    useShowToast(
      (type = "customError"),
      (text1 = "An error ocurred while updating the user, please try again")
    );
  }
}
