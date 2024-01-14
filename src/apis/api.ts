import { AxiosRequestConfig } from 'axios';
import axiosInstance from '@apis/axiosInstance';

const api = {
  get: (url: string) => axiosInstance.get(url),
  post: (url: string, data?: any, headers?: any) => axiosInstance.post(url, data, headers),
  put: (url: string, data?: any) => axiosInstance.put(url, data),
  delete: (url: string, data?: any) => axiosInstance.delete(url, { data: data }),
  patch: (url: string, data?: any, config?: AxiosRequestConfig) =>
    axiosInstance.patch(url, data, config),
};

export default api;
