// ** Core packages
import axios from "axios";
import Cookie from "js-cookie";
import { isExpired } from "react-jwt";

// ** Import utils
import { API_URL, APP_ROUTE } from "./Constants";

const http = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

http.interceptors.request.use(
  function (config) {
    const token = Cookie.get("token");

    if (token) {
      if (isExpired(token)) {
        alert("Token hết hạn!");
        window.location.href = APP_ROUTE.ADMIN_LOGIN;
        Cookie.remove("token");
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  function (error) {
    console.error("Request Error:", error.message);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default http;
