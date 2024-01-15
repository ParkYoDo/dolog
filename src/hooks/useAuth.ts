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
    onSuccess: data => {
      console.log(data);
      const { accessToken } = data;
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    },
    onError: error => {
      console.log(error);
    },
  });

  return { signUp, signIn };
};

export default useAuth;
