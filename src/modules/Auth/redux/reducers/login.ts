import {
  LoginActionTypes,
  LoginState,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../action-types/login";
// import { getAuthLocalData } from '@helpers/token';

const initialState = {
  loading: false,
};

export default (state = initialState, action: LoginActionTypes): LoginState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...action.payload,
        },
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
