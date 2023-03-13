import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {IntlProvider} from 'react-intl';
import Persian from './lang/fa.json';
import English from './lang/en.json';
const {store} = configureStore();

const container = document.getElementById('root')!;
const root = createRoot(container);
let lang;
lang=Persian;
let messages=Persian;
let locale='fa';
root.render(
  <React.StrictMode>
  <Provider store={store}>
      <IntlProvider  messages={messages} locale={locale}>
          <App />
      </IntlProvider>
  </Provider>
</React.StrictMode>
);


reportWebVitals();
