import { ThemeContext, ThemeDispatchContext } from '@contexts/ThemeContext';
import { useContext, useEffect } from 'react';

const useTheme = () => {
  const { theme } = useContext(ThemeContext)!;
  const { setTheme } = useContext(ThemeDispatchContext)!;

  const onToggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    }
    if (theme === 'light') {
      setTheme('dark');
    }
  };

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
      document.body.dataset.theme = theme;
    }
  }, [theme]);

  return { theme, onToggleTheme };
};

export default useTheme;
