import React, { Component } from "react";
import RobotsList from "./RobotsListComponent";
import SearchBox from './SearchBox'
import {robots} from './robots'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }
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
