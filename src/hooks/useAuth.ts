import { authApi } from '@apis/apis';
import { IAuth } from '@type/interface';
import axios from 'axios';
import { useMutation } from 'react-query';

const useAuth = () => {
  const { mutate: signUp } = useMutation((data: IAuth) => authApi.signUp(data), {
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });

  const { mutate: signIn } = useMutation((data: IAuth) => authApi.signIn(data), {
    onSuccess: data => onLoginSuccess(data),
    onError: error => {
      console.log(error);
    },
  });

  const { mutate: silentRefresh } = useMutation(authApi.silentRefresh, {
    onSuccess: data => onLoginSuccess(data),
    onError: error => {
      console.log(error);
    },
  });

  const onLoginSuccess = (data: any) => {
    const { accessToken } = data;
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    setTimeout(silentRefresh, 24 * 3600 * 1000 - 60000); // JWT 만료 1시간 전
  };

  return { signUp, signIn, silentRefresh };
};

export default useAuth;
