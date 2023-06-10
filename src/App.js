import React, { Component } from "react";
import RobotsList from "./RobotsListComponent";
import SearchBox from './SearchBox'
import {robots} from './robots'

const state = {
  robots: robots,
  searchfield: '',
}

export default class App extends Component {
  render() {
    return(
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <RobotsList  robots = {robots} />
      </div>
    )
  }
}
