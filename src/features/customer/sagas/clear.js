import { put, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { clear } from "../../../utilities/asyncStorage";
import { useShowToast } from "../hooks";

export function* watchClearCustomers() {
  yield takeLatest(actions.clearCustomers.toString(), takeClearCustomers);
}

export function* takeClearCustomers() {
  try {
    clear();
    yield delay(1000);
    yield put(actions.clearResult());
    useShowToast(
      (type = "customSuccess"),
      (text1 = "Storage successfully created!")
    );
  } catch (error) {
    yield put(actions.clearResult());
    useShowToast(
      (type = "customError"),
      (text1 = "An error ocurred while clearing device storage")
    );
  }
}
