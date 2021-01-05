import { LoginInput } from "@modules/Auth/redux/action-types";
import axios from "axios";
export const login = async (action: LoginInput) => {
  return axios({
    method: "post",
    url: "http://192.168.50.14:8080/login",
    data: {
      email: action.email,
      password: action.password,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data.message;
    });
};
