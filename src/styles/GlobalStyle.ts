import styled, { createGlobalStyle } from 'styled-components';
import { CSSProperties } from 'react';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
    }
    
    body {
        font-size: 62.5%;
        font-family: 'Poor Story';
    }

    a {
        text-decoration: none;
        color:white;
    }
`;

export const LayoutWrap = styled.div<CSSProperties>`
  width: ${props => props?.width || '100%'};
  height: ${props => props?.height || '100%'};
  display: ${props => props?.display || 'flex'};
  flex-direction: ${props => props?.flexDirection || 'row'};
  justify-content: ${props => props?.justifyContent || 'center'};
  align-items: ${props => props?.alignItems || 'center'};
  gap: ${props => props?.gap};
  font-size: 24px;
`;
