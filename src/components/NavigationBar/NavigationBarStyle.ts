import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationBar = styled.nav<{ theme: string }>`
  width: 100%;
  height: 62px;
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.25s ease-in-out;

  ${props =>
    props?.theme === 'light'
      ? css`
          background-color: #d4d4d4;
        `
      : props?.theme === 'dark' &&
        css`
          background-color: #2e3137;
        `}
`;

export const NavLink = styled(Link)`
  letter-spacing: 24px;
`;

export const NavMenus = styled.div`
  display: flex;
  gap: 12px;
`;
