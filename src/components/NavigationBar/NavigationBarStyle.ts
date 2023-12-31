import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationBar = styled.nav<{ theme: string }>`
  border: 1px solid red;
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

export const Menus = styled.div`
  display: flex;
  gap: 12px;
`;

export const Theme = styled.div<{ darkMode: boolean }>`
  background-color: gray;
  border-radius: 12px;
  display: flex;
  position: relative;
  cursor: pointer;

  &::before {
    width: 50%;
    height: 100%;
    position: absolute;
    background-color: yellow;

    ${props =>
      props?.darkMode
        ? css`
            content: '🌙';
            left: 50%;
          `
        : !props?.darkMode &&
          css`
            content: '☀️';
          `}
  }
`;
