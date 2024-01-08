import { ReactNode, createContext, useEffect, useLayoutEffect, useState } from 'react';

interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('');

  useLayoutEffect(() => {
    const userTheme = localStorage.getItem('theme');
    const systemDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userTheme) {
      return setTheme(userTheme);
    }
    if (!userTheme && systemDarkTheme) {
      return setTheme('dark');
    }
    return setTheme('light');
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
