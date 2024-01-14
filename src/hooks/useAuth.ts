import { authApi } from '@apis/apis';
import { IAuth } from '@type/interface';
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

  return { signUp };
};

export default useAuth;
