import { all, take } from "redux-saga/effects";
import authSaga from "@modules/Auth/redux/sagas";

import * as commonSaga from "./common-saga";
import { APP_STARTED } from "./actions";

export default function* rootSaga() {
  yield take(APP_STARTED);
  yield all([authSaga(), commonSaga.checkErrorAsync()]);
}
