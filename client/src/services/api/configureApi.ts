import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

instance.interceptors.request.use(
  (config) => {
    console.log("Intercepted at request", config);
    return config;
  },
  (error) => {
    console.log("Intercepted at request error");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log("Intercepted at response", response);
    return response;
  },
  (error) => {
    console.log("Intercepted at response error");
    return Promise.reject(error);
  }
);
