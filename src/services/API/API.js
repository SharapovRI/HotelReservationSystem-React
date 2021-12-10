import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseURL from "../../api/consts";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
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

instance.interceptors.response.use(
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
          const rs = await instance.post("/Authorization/refresh-token", {
            refreshToken: localStorage.getItem("refreshToken")
          }).catch((error) => {
            if(error.response.status === 400)
            {
              localStorage.setItem("LastPath", window.location.href);
              window.location.href = "/Login"
              return Promise.reject(error);
            }
          });

          const { accessToken } = rs.data;
          localStorage.setItem("jwtToken", accessToken);

          return instance(originalConfig);
        } 
        catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
