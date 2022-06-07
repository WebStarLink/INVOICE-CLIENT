import axios, { AxiosRequestConfig } from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5050/api/",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log("Intercepted at response", response);
    return response;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);
