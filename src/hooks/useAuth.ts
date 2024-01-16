import { AuthContext, AuthDispatchContext } from '@contexts/AuthContext';
import { IAuthUser } from '@type/authInterface';
import { useContext } from 'react';

const useAuth = () => {
  const { auth } = useContext(AuthContext)!;
  const { setAuth } = useContext(AuthDispatchContext)!;

  const onLogin = (auth: IAuthUser) => {
    return setAuth(auth);
  };

  const onLogout = () => {
    return setAuth({ id: '', name: '' });
  };

  return { auth, onLogin, onLogout };
};

export default useAuth;
