import axiosRetry, { exponentialDelay, isNetworkError } from "axios-retry";
import { isEmpty } from "@/core/Utils.js";
import axios from "axios";

const shouldRetry = (error) => {
  return (
    isNetworkError(error) ||
    error.code === "ECONNABORTED" ||
    (error.response && error.response.status === 429) ||
    (error.response && isEmpty(error.response.data))
  );
};

const retryConfig = {
  retries: 2,
  retryDelay: exponentialDelay,
  retryCondition: shouldRetry,
  shouldResetTimeout: true
};

const request = axios.create({
  timeout: 120000,

});

axiosRetry(request, retryConfig);

const handleError = (error) => {
  if (error.message === "Network Error") {
    const errorMessage = {
      status: "NETWORK_ERROR",
      data: {
        message: error.message
      }
    };
    return errorMessage;
  }
};

request.interceptors.request.use(async (config) => {
  if (!config.data?.skipAuth) {
    config.headers = {
      ...config.headers
    };
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


request.interceptors.response.use((response) => {
  const statusCode = response?.status || -1;
  const isValidStatus = statusCode >= 200 && statusCode < 300;
  if (isValidStatus) {
    return response.data;
  }
}, handleError);


export default request;