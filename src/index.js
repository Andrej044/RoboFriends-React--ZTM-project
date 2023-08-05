import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App'
import { searchRobots } from './reducers';

const store = configureStore({
  reducer: searchRobots})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Provider  store= {store}>
    <App/>
  </Provider>
  </React.StrictMode>
);

reportWebVitals();
