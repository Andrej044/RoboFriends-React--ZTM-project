import  {useState, useEffect} from "react";
import { connect } from "react-redux";
import RobotsList from "../components/RobotsListComponent";
import SearchBox from '../components/SearchBox'
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css"
import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField:state.searchRobots.searchField
  }
}

const  App = (props) => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => setRobots(users))
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

    const filteredList = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      }) 

      return !robots.length ?
        <h1>Loading...</h1> :
        (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange = {onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <RobotsList  robots = {filteredList} />
            </ErrorBoundry>
          </Scroll>
        </div>
        )
  };

  export default connect(mapStateToProps, mapDispatchToProps)(App);