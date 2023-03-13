import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {IntlProvider} from 'react-intl';
import { Provider } from 'react-redux';
import Persian from './lang/fa.json';
import English from './lang/en.json';
const root = ReactDOM.createRoot(document.getElementById('root'));
let lang;
lang=Persian;
let messages=Persian;
let locale='fa';
root.render(
  <React.StrictMode>
    <IntlProvider  messages={messages} locale={locale}>
    <App />
    </IntlProvider>
  </React.StrictMode>
);
