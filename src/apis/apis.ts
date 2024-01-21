import PATH from '@apis/apiPath';
import axiosInstance from '@apis/axiosInstance';
import { IAuthLogin, IAuthSignUp } from '@models/authInterface';
import { AxiosRequestConfig } from 'axios';

const api = {
  get: (url: string) => axiosInstance.get(url),
  post: (url: string, data?: any, headers?: any) => axiosInstance.post(url, data, headers),
  put: (url: string, data?: any) => axiosInstance.put(url, data),
  delete: (url: string, data?: any) => axiosInstance.delete(url, { data: data }),
  patch: (url: string, data?: any, config?: AxiosRequestConfig) =>
    axiosInstance.patch(url, data, config),
};

export const auth = {
  signUp: async (data: IAuthSignUp) => {
    const res = await api.post(PATH.AUTHENTICATION.SIGNUP, data);
    return res.data;
  },
  signIn: async (data: IAuthLogin) => {
    const res = await api.post(PATH.AUTHENTICATION.SIGNIN, data);
    return res.data;
  },
  silentRefresh: async () => {
    const res = await api.post(PATH.AUTHENTICATION.SILENT_REFRESH);
    return res.data;
  },
};

export const post = {
  getPresignedUrl: async (data: string) => {
    const res = await api.get(`${PATH.POST.PRESIGNED_URL}?fileName=${data}`);
    return res.data;
  },
  uploadS3: async ({ url, data }: any) => {
    const res = await api.post(url, data);
    return res.data;
  },
};
