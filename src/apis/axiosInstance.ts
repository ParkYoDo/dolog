import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: '/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
    withCredentials: true,
  },
});

export const blogApi = {
  get: (url: string) => axiosInstance.get(url),
  post: (url: string, data?: any, headers?: any) => axiosInstance.post(url, data, headers),
  put: (url: string, data?: any) => axiosInstance.put(url, data),
  delete: (url: string, data?: any) => axiosInstance.delete(url, { data: data }),
  patch: (url: string, data?: any, config?: AxiosRequestConfig) =>
    axiosInstance.patch(url, data, config),
};
