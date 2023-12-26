import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'Router';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from '@styles/GlobalStyle';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
