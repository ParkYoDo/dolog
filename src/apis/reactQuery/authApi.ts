import { auth } from '@apis/apis';
import axiosInstance from '@apis/axiosInstance';
import { IAuthLogin, IAuthSignUp } from '@type/authInterface';
import { useMutation } from 'react-query';

const JWT_EXPIRE_TIME = 24 * 3600 * 1000;

const authApi = () => {
  const { mutate: signUp } = useMutation((data: IAuthSignUp) => auth.signUp(data), {
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });

  const { mutate: signIn } = useMutation((data: IAuthLogin) => auth.signIn(data), {
    onSuccess: data => onLoginSuccess(data),
    onError: error => {
      console.log(error);
    },
  });

  const { mutate: silentRefresh } = useMutation(auth.silentRefresh, {
    onSuccess: data => onLoginSuccess(data),
    onError: error => {
      console.log(error);
    },
  });

  const onLoginSuccess = async (data: any) => {
    const { accessToken } = data;
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    setTimeout(silentRefresh, JWT_EXPIRE_TIME - 60000); // JWT 만료 1시간 전
  };

  return { signUp, signIn, silentRefresh };
};

export default authApi;
