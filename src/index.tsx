import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashboard';
import { store } from './store/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </React.StrictMode>
);
