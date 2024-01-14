import { IconButton, LayoutWrap } from '@styles/GlobalStyle';
import styled from 'styled-components';

export const ModalLayout = styled(LayoutWrap)`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--modal-body-color);
`;

export const ModalCloseBtn = styled(IconButton)``;

export const Header = styled.header`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--modal-header-color);
  position: relative;

  ${ModalCloseBtn} {
    position: absolute;
    right: 0;
  }
`;

export const Body = styled.div`
  width: 100%;
  padding: 24px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

export const Footer = styled.footer`
  padding: 0 24px 24px 24px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
