import { LayoutWrap } from '@styles/GlobalStyle';
import { useState, useEffect } from 'react';
import * as S from '@components/NavigationBar/NavigationBarStyle';

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
      <S.Menus>
        <div>검색 아이콘</div>
        <S.Theme onClick={onToggleTheme} darkMode={theme === 'dark'}></S.Theme>
      </S.Menus>
    </S.NavigationBar>
  );
};

export default NavigationBar;
