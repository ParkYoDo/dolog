import axiosInstance from '@apis/axiosInstance';

axiosInstance.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);
