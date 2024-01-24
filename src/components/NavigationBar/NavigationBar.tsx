import * as S from '@components/NavigationBar/NavigationBarStyle';
import ToggleSwitch from '@components/ToggleSwitch/ToggleSwitch';
import useTheme from '@hooks/useTheme';
import SignUpModal from '@components/SignUpModal/SignUpModal';
import LoginModal from '@components/LoginModal/LoginModal';
import useModal from '@hooks/useModal';
import { LayoutWrap } from '@styles/GlobalStyle';
import useAuth from '@hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const { theme, onToggleTheme } = useTheme();
  const { auth, onLogout } = useAuth();
  const { onOpenModal } = useModal();
  const navigate = useNavigate();

  return (
    <S.NavigationBar>
      <S.NavLink to="/">Blog</S.NavLink>
      <S.NavMenus>
        <ToggleSwitch onClick={onToggleTheme} checked={theme === 'dark'} />

        {auth?.uuid ? (
          <>
            <LayoutWrap
              width="fit-content"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/write')}
            >
              Write
            </LayoutWrap>
            <LayoutWrap
              width="fit-content"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                onLogout();
              }}
            >
              Logout
            </LayoutWrap>
          </>
        ) : (
          <>
            <LayoutWrap
              width="fit-content"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                onOpenModal(<SignUpModal />);
              }}
            >
              Sign Up
            </LayoutWrap>
            <LayoutWrap
              width="fit-content"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                onOpenModal(<LoginModal />);
              }}
            >
              Login
            </LayoutWrap>
          </>
        )}
      </S.NavMenus>
    </S.NavigationBar>
  );
};

export default NavigationBar;
