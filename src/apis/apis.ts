import apis from '@apis/api';
import PATH from '@apis/apiPath';
import { IAuth } from '@type/interface';

export const authApi = {
  signUp: async (data: IAuth) => {
    const res = await apis.post(PATH.AUTHENTICATION.SIGNUP, data);
    return res.data;
  },
  signIn: async (data: any) => {
    const res = await apis.post(PATH.AUTHENTICATION.SIGNIN, data);
    return res.data;
  },
};
