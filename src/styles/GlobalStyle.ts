import styled, { createGlobalStyle, css } from 'styled-components';
import { globalCssVariables } from '@styles/globalCssVariables';
import { CSSProperties } from 'react';
import { lightMode, darkMode } from '@styles/theme';

export const GlobalStyle = createGlobalStyle`
    :root {
        ${globalCssVariables}
    }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      &::-webkit-scrollbar {
        width: 16px;
        position: absolute;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--scroll-thumb);
        transition: var(--transition-default);
        background-clip: padding-box;
        border: 4px solid transparent;
        border-radius: var(--rounded-sm);
        &:hover {
          background: var(--scroll-hover);
          background-clip: padding-box;
        }
      }

      @media screen and (max-width: 768px) {
        ::-webkit-scrollbar {
          display: none;
        }
      }
    }

    html, #root {
      height: 100%;
    }

    body {
        height: 100%;
        font-size: 10px;
        font-family: 'Poor Story';
        ${lightMode}
        transition: background 0.125s ease-in;
    }

    @media (prefers-color-scheme: dark) {
        body {
            ${darkMode}
        }
   }

    body[data-theme='light'] {
        ${lightMode}
    }

    body[data-theme='dark'] {
        ${darkMode}
    }

    body {
        color: var(--text-color);
        background: var(--background-color);
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const LayoutWrap = styled.div<
  Pick<
    CSSProperties,
    | 'width'
    | 'height'
    | 'padding'
    | 'margin'
    | 'display'
    | 'flexDirection'
    | 'justifyContent'
    | 'alignItems'
    | 'gap'
  >
>`
  width: ${props => props?.width || '100%'};
  height: ${props => props?.height || '100%'};
  padding: ${props => props?.padding || '0'};
  margin: ${props => props?.margin || '0'};
  display: ${props => props?.display || 'flex'};
  flex-direction: ${props => props?.flexDirection || 'row'};
  justify-content: ${props => props?.justifyContent || 'center'};
  align-items: ${props => props?.alignItems || 'center'};
  gap: ${props => props?.gap};
  font-size: 24px;
`;

export const IconButton = styled.button`
  width: var(--button-sm);
  height: var(--button-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--rounded-sm);
  background-color: transparent;
  border: unset;
  cursor: pointer;

  svg {
    filter: var(--svg-gray);
  }
  &:is(:hover, :active) {
    background: #4d545f;
    svg {
      filter: var(--svg-white);
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 12px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 12px;
  border-radius: 8px;
  background-color: var(--modal-header-color);
  color: var(--text-color);
  border: none;
  cursor: pointer;
`;
