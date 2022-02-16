import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseURL from "../../api/consts";

const axiosInterceptor = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInterceptor.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInterceptor.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/Authorization/authenticate" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await axiosInterceptor.post("/Authorization/refresh-token", {
            refreshToken: localStorage.getItem("refreshToken")
          }).catch((error) => {
            if (error.response.status === 403) {
              localStorage.setItem("LastPath", window.location.href);
              localStorage.removeItem("jwtToken");
              localStorage.removeItem("refreshToken");
              window.location.href = "/Login";
              return Promise.reject(error);
            }
          });
          const { jwtToken, refreshToken } = rs.data;
          localStorage.setItem("jwtToken", jwtToken);
          localStorage.setItem('refreshToken', refreshToken)

          return axiosInterceptor(originalConfig);
        }
        catch (_error) {
          return Promise.reject(_error);
        }
      }
      else if (err.response.status === 400 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          localStorage.setItem("LastPath", window.location.href);
          localStorage.removeItem("jwtToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/Login";
          return axiosInterceptor(originalConfig);
        }
        catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    if (err.response?.status === 403) {
      window.location.href = "/*";
      return Promise.reject(err);
    }

    return Promise.reject(err);
  }
);

export default axiosInterceptor;
