import { useContext, useEffect, useLayoutEffect } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)!;

  const onToggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    }
    if (theme === 'light') {
      setTheme('dark');
    }
    if (!theme) {
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? setTheme('light')
        : setTheme('dark');
    }
  };

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
      document.body.dataset.theme = theme;
    }
  }, [theme]);

  return [theme, onToggleTheme] as const;
};

export default useTheme;
