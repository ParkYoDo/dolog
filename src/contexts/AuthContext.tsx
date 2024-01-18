import { IAuthUser } from '@type/authInterface';
import { createContext, useState } from 'react';
import { IChildren } from 'type/interface';

interface IAuthContext {
  auth: IAuthUser;
  setAuth: (auth: IAuthUser) => void;
}

export const AuthContext = createContext<Pick<IAuthContext, 'auth'> | null>(null);
export const AuthDispatchContext = createContext<Pick<IAuthContext, 'setAuth'> | null>(null);

export const AuthProvider = ({ children }: IChildren) => {
  const [auth, setAuth] = useState<IAuthUser>({ uuid: '' });

  return (
    <AuthDispatchContext.Provider value={{ setAuth }}>
      <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
    </AuthDispatchContext.Provider>
  );
};
