import React, { Component } from "react";
import RobotsList from "./RobotsListComponent";
import SearchBox from './SearchBox'
import "./App.css"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({robots:users}))
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
