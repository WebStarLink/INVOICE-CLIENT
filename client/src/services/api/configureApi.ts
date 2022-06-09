import axios, { AxiosRequestConfig } from "axios";

const baseURL = `${process.env.REACT_APP_API_URL}`;

export const checkAuth = {
  refreshToken: () => axios.get(`${baseURL}/refresh`, { withCredentials: true }),
};

export const instance = axios.create({
  baseURL: baseURL,
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
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && error.config && !error.config.maxAttempt) {
      originalRequest.maxAttempt = true;

      try {
        const response = await checkAuth.refreshToken();
        localStorage.setItem("token", response.data.accessToken);
        return instance.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
    throw error;
  }
);
