import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './header.scss';

const root = ReactDOM.createRoot(document.body);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
