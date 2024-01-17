import { IChildren } from '@type/interface';
import { ThemeProvider } from './ThemeContext';
import { ModalProvider } from './ModalContext';
import { AuthProvider } from './AuthContext';

const ContextProvider = ({ children }: IChildren) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ModalProvider>{children} </ModalProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
