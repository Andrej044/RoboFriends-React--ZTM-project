import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {robots} from './robots'
import 'tachyons';
import App from './App.js'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App robots={robots}/>
  </React.StrictMode>
);

reportWebVitals();
