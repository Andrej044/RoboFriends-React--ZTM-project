import React, { Component } from "react";
import RobotsList from "../components/RobotsListComponent";
import SearchBox from '../components/SearchBox'
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
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
    const {robots, searchfield} = this.state;
    const filteredList = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      }) 

      return !robots.length ?
        <h1>Loading...</h1> :
        (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange = {this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <RobotsList  robots = {filteredList} />
            </ErrorBoundry>
          </Scroll>
        </div>
        ) 

  }
}
