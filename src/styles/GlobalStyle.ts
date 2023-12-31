import styled, { createGlobalStyle, css } from 'styled-components';
import { globalCssVariables } from './globalCssVariables';
import { CSSProperties } from 'react';

export const GlobalStyle = createGlobalStyle`
    :root {
        ${globalCssVariables}
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

    html, #root {
      height: 100%;
    }

    body {
        height: 100%;
        font-size: 62.5%;
        font-family: 'Poor Story';
        transition: color, background-color 0.25s ease-in-out;
    }

    body[data-theme='light'] {
        color:#1a1a1a;
        background-color: #f0f0f0;
    }
    body[data-theme='dark'] {
        color: #f0f0f0;
        background-color: #1a1a1a;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const LayoutWrap = styled.div<CSSProperties>`
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
