import { LayoutWrap } from '@styles/GlobalStyle';
import styled, { keyframes } from 'styled-components';

const UpModal = keyframes`
  from {
    scale: 0.9;
    opacity: 0;
  } 
  to  {
    scale: 1;
    opacity: 1;
  }
`;

const DownModal = keyframes`
  from {
    scale: 1;
    opacity: 1;
  } 
  to {
    scale: 0.9;
    opacity: 0;
  }
`;

export const ModalLayout = styled(LayoutWrap)<{ mount: boolean }>`
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  animation: ${({ mount }) => (mount ? UpModal : DownModal)} 0.25s ease-in-out;
  animation-fill-mode: forwards;
`;

export const Header = styled.header`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--modal-header-color);
  position: relative;
  border-radius: 12px 12px 0 0;

  > button {
    position: absolute;
    right: 0;
  }
`;

export const Body = styled.body`
  width: 100%;
  min-height: 300px;
  background-color: var(--modal-body-color);
  border-radius: 0 0 12px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer``;
