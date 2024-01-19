import { AuthProvider } from '@contexts/AuthContext';
import { ModalProvider } from '@contexts/ModalContext';
import { ThemeProvider } from '@contexts/ThemeContext';
import { IChildren } from '@models/interface';

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
