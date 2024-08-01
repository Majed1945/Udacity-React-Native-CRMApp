import { all, put, select, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";
import { useShowToast } from "../hooks";

export function* watchDeleteCustomer() {
  yield takeLatest(actions.deleteCustomer.toString(), takeDeleteCustomer);
}

export function* takeDeleteCustomer(action) {
  const customerID = action.payload;
  try {
    const customers = yield select((state) => state.customer.list.customers);
    const result = customers.filter((customer) => customer.id !== customerID);
    // pretend call to API
    yield delay(1000);

    yield put(actions.deleteCustomerResult(result));
    useShowToast(
      (type = "customSuccess"),
      (text1 = "User successfully deleted!")
    );
  } catch (error) {
    yield put(actions.editCustomerError(error.toString()));
    useShowToast(
      (type = "customError"),
      (text1 = "An error ocurred while deleting the user, please try again")
    );
  }
}
