import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import CartProvider from './contexts/cartContext';
import UserProvider from './contexts/userContext';
import { mainTheme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
