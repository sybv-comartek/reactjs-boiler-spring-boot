import { AppError } from "@commons/types";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export interface LoginInput {
  username: string;
  password: string;
}

export interface UserInfo {
  token: string;
  refreshToken: string;
  uid: string;
  expiresAt: number;
  refreshTokenExpiresAt: number;
  isAutoLogin?: boolean;
  redirectUrl?: string;
}

export interface LoginState {
  loading: boolean;
  userInfo?: UserInfo;
}

export interface LoginAction {
  type: typeof LOGIN;
  payload: LoginInput;
}

export interface LoginActionSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: UserInfo;
}

export interface LoginActionError {
  type: typeof LOGIN_ERROR;
  payload: AppError;
}

export type LoginActionTypes =
  | LoginAction
  | LoginActionSuccess
  | LoginActionError;
