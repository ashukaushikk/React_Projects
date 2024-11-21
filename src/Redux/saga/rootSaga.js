import { takeLatest } from "redux-saga/effects";
import reduxConstants from "../constant/reduxConstant";
import { fetchAPISaga } from "./saga";

export function* rootSaga() {
  yield takeLatest(reduxConstants.CALL_API_LOAD, fetchAPISaga);
}
