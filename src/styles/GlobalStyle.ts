import styled, { createGlobalStyle, css } from 'styled-components';
import { globalCssVariables } from './globalCssVariables';
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
