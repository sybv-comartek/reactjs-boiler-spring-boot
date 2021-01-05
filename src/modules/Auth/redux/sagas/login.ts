// import env from '@/env';
// import * as apis from '@modules/Auth/services/apis';
import { put } from "redux-saga/effects";
import { LoginAction } from "../action-types";
import { loginError } from "../actions";
import { login } from "@modules/Auth/services";
// import { getAuthLocalData, setAuthData } from '@/helpers/token';
// import { getHistory, getRedirectUrl } from '@/helpers/history';
// import { NotificationSuccess } from '@commons/components/Notification';
// import { CommonPath } from '@commons/base-routes';

// const TOKEN_KEY = env.tokenKey;

export function* loginAsync(action: LoginAction) {
  try {
    const payload = yield login(action.payload);
    // yield put(loginSuccess(payload.login));
    console.log(payload);
  } catch (error) {
    yield put(loginError(error));
  }
}

// export function loginSuccessAsync(action: LoginActionSuccess) {
//   const data = action.payload;

//   if (!data?.isAutoLogin) {
//     setAuthData(data);
//     NotificationSuccess('Thông báo', 'Đăng nhập thành công');
//   }

//   const redirectUrl = getRedirectUrl();
//   if (redirectUrl) {
//     const rUrl = new URL(redirectUrl);
//     const cOrigin = window.location.origin;
//     if (cOrigin === rUrl.origin) {
//       const newPath = rUrl.pathname + rUrl.search;
//       if (newPath.indexOf(CommonPath.LOGIN_PATH) === 0) {
//         getHistory().replace(CommonPath.DEFAULT_PATH);
//       } else {
//         getHistory().replace(newPath);
//       }
//     } else {
//       window.location.href = redirectUrl;
//     }
//   } else getHistory().push(CommonPath.DEFAULT_PATH);
// }

// export function* autoLoginFlow() {
//   while (1) {
//     const userInfo = getAuthLocalData();
//     if (userInfo) {
//       userInfo.isAutoLogin = true;
//       yield put(loginSuccess(userInfo));
//     }
//     yield take(LOGOUT);
//   }
// }

// export function* logoutFlow() {
//   localStorage.removeItem(TOKEN_KEY);
// }
