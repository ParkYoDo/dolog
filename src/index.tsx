import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from '@styles/GlobalStyle';
import ContextProvider from '@contexts/ContextProvider';
import ModalPortal from '@components/Modal/ModalPortal';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ContextProvider>
          <GlobalStyle />
          <Router />
          <ModalPortal />
        </ContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
