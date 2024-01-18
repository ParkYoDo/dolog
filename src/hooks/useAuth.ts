import { AuthContext, AuthDispatchContext } from '@contexts/AuthContext';
import { IAuthUser } from '@type/authInterface';
import { useContext } from 'react';

const useAuth = () => {
  const { auth } = useContext(AuthContext)!;
  const { setAuth } = useContext(AuthDispatchContext)!;

  const onLogin = (newAuth: IAuthUser) => {
    setAuth(newAuth);
  };

  const onLogout = () => {
    return setAuth({ uuid: '' });
  };

  return { auth, onLogin, onLogout };
};

export default useAuth;
