import { put, select, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";
import { useShowToast } from "../hooks";
import { set } from "../../../utilities/asyncStorage";

export function* watchCreateCustomer() {
  yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer() {
  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customers = yield select((state) => state.customer.list.customers);
    const customer = {
      id: customers.length + 1,
      ...fields,
    };
    const result = [customer, ...customers];

    yield set("Customers", JSON.stringify(result));
    yield delay(1000);
    yield put(actions.createCustomerResult(result));

    useShowToast(
      (type = "customSuccess"),
      (text1 = "User successfully created!")
    );
  } catch (error) {
    yield put(actions.createCustomerError(error.toString()));

    useShowToast(
      (type = "customError"),
      (text1 = "An error ocurred while creating the user, please try again")
    );
  }
}
