import { ReactNode, createContext, useState, useLayoutEffect } from 'react';
import { IChildren } from '@models/interface';

interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<Pick<IThemeContext, 'theme'> | null>(null);
export const ThemeDispatchContext = createContext<Pick<IThemeContext, 'setTheme'> | null>(null);

export const ThemeProvider = ({ children }: IChildren) => {
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

  return (
    <ThemeDispatchContext.Provider value={{ setTheme }}>
      <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
    </ThemeDispatchContext.Provider>
  );
};
