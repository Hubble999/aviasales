import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import ticketsReducer from '../src/slices/tickets';
import i18n from '../src/locales/index.js'

console.log(i18n.t('transfers.counter.count', { count: 0 }));

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);