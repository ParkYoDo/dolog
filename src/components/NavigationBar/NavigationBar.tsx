import * as S from '@components/NavigationBar/NavigationBarStyle';
import ToggleSwitch from '@components/ToggleSwitch/ToggleSwitch';
import useTheme from '@hooks/useTheme';

const NavigationBar = () => {
  const { theme, onToggleTheme } = useTheme();

  return (
    <S.NavigationBar>
      <S.NavLink to="/">Blog</S.NavLink>
      <S.NavMenus>
        <ToggleSwitch onClick={onToggleTheme} checked={theme === 'dark'} />
        <div>로그인</div>
      </S.NavMenus>
    </S.NavigationBar>
  );
};

export default NavigationBar;
