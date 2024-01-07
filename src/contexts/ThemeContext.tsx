import { ReactNode, createContext, useEffect, useLayoutEffect, useState } from 'react';

interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('');

  useLayoutEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme')!);
    }

    if (!localStorage.getItem('theme')) {
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? (document.body.dataset.theme = 'dark')
        : (document.body.dataset.theme = 'light');
    }

    document.body.dataset.theme = theme;
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
