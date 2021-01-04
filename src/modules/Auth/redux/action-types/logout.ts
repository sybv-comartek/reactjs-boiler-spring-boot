export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type LogoutActionTypes = LogoutAction;
