import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'Router';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from '@styles/GlobalStyle';
import { ThemeProvider } from 'contexts/ThemeContext';
import { ModalProvider } from 'contexts/ModalContext';
import ModalPortal from '@components/Modal/ModalPortal';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <ModalProvider>
            <GlobalStyle />
            <Router />
            <ModalPortal />
          </ModalProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
