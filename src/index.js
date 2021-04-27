import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import ticketsReducer from '../src/slices/tickets';



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