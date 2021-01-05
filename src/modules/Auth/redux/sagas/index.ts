import { all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../action-types";
import { loginAsync, loginSuccessAsync } from "./login";

export default function* root() {
  return all([
    yield takeLatest(actionTypes.LOGIN, loginAsync),
    yield takeLatest(actionTypes.LOGIN_SUCCESS, loginSuccessAsync),
    // yield fork(autoLoginFlow),
    // yield takeLatest(actionTypes.LOGOUT, logoutFlow),
  ]);
}
