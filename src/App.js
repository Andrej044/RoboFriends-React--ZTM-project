import React, { Component } from "react";
import RobotsList from "./RobotsListComponent";
import SearchBox from './SearchBox'
import {robots} from './robots'
import "./App.css"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }
  render() {
    const filteredList = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      }) 
    return(
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange = {this.onSearchChange} />
        <RobotsList  robots = {filteredList} />
      </div>
    )
  }
}
