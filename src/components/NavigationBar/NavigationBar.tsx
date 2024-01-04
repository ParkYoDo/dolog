import * as S from '@components/NavigationBar/NavigationBarStyle';
import ToggleSwitch from '@components/ToggleSwitch/ToggleSwitch';
import { useState, useEffect } from 'react';

const NavigationBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const onToggleTheme = () => {
    if (theme === 'dark') {
      return setTheme('light');
    }
    if (theme === 'light') {
      return setTheme('dark');
    }
  };

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
      document.body.dataset.theme = theme;
    }
  }, [theme]);

  return (
    <S.NavigationBar theme={theme!}>
      <S.NavLink to="/">Blog</S.NavLink>
      <S.NavMenus>
        <ToggleSwitch prev="☀️" next="🌙" />
        <div>로그인</div>
      </S.NavMenus>
    </S.NavigationBar>
  );
};

export default NavigationBar;
