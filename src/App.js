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
  onSearchChange(e){
    console.log(e)
  }
  render() {
    return(
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange = {this.onSearchChange} />
        <RobotsList  robots = {robots} />
      </div>
    )
  }
}
