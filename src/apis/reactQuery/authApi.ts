import { authApi } from '@apis/apis';
import { IAuthLogin, IAuthSignUp } from '@type/authInterface';
import axios from 'axios';
import { useMutation } from 'react-query';

const JWT_EXPIRE_TIME = 24 * 3600 * 1000;

const useAuth = () => {
  const { mutate: signUp } = useMutation((data: IAuthSignUp) => authApi.signUp(data), {
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });

  const { mutate: signIn } = useMutation((data: IAuthLogin) => authApi.signIn(data), {
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
    setTimeout(silentRefresh, JWT_EXPIRE_TIME - 60000); // JWT 만료 1시간 전
  };

  return { signUp, signIn, silentRefresh };
};

export default useAuth;
