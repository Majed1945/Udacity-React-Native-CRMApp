import { all } from "redux-saga/effects";
import { watchCreateCustomer } from "./create";
import { watchEditCustomer } from "./edit";
import { watchDeleteCustomer } from "./delete";
import { watchLoadCustomers } from "./load";
import { watchClearCustomers } from "./clear";

export default function* customer() {
  yield all([
    watchCreateCustomer(),
    watchEditCustomer(),
    watchDeleteCustomer(),
    watchLoadCustomers(),
    watchClearCustomers(),
  ]);
}
