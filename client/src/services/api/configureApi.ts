import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5050/api/",
});

instance.interceptors.request.use(
  (config) => {
    console.log("Intercepted at request", config);
    return config;
  },
  (error) => {
    console.log("Intercepted at request error");
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
