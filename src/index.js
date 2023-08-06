import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App'
import { searchRobots, requestRobots } from './reducers';

const  thunk =  require('redux-thunk').default;


const logger = createLogger();
const store = configureStore({
  reducer: searchRobots,
  middleware: (applyMiddleware) => applyMiddleware(thunk).concat(logger)
})
  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Provider  store= {store}>
    <App/>
  </Provider>
  </React.StrictMode>
);

reportWebVitals();
