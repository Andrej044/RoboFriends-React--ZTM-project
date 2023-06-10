import React from 'react';
import Card from './Card';


const robotsList = ({robots}) =>{ 
 return( robots.map(robot => {
  return(  <Card id = {robot.id} 
          name = {robot.name}
          username = {robot.username}
          email = {robot.email}
          key={robot.id}
    />  
  )
}))
}

export default robotsList;