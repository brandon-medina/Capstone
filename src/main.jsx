import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import CartProvider from './providers/CartProvider';
import store from './store';
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <CartProvider>
      <App />
    </CartProvider>
  </Provider>
);

