import React from "react";
import RobotsList from "./RobotsListComponent";
import SearchBox from './SearchBox'

const App = ({robots})=> {
  return(
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox />
      <RobotsList  robots = {robots} />
    </div>
  )
}

export default App;