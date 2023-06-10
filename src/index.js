import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import {robots} from './robots'
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));

const robotsList = robots.map(robot => {
  return(
    <Card id = {robot.id} 
          name = {robot.name}
          username = {robot.username}
          email = {robot.email}
          key={robot.id}
    />  
  )
})

root.render(
  <React.StrictMode>
    {robotsList}
  </React.StrictMode>
);

reportWebVitals();
