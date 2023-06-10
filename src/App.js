import React from "react";
import RobotsList from "./RobotsListComponent";

const App = ({robots})=> {
  return(
    <RobotsList  robots = {robots} />
  )
}

export default App;