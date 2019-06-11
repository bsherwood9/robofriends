import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css"

class App extends Component {
    //app inherits what componenet does
  constructor() {
      //ignition switch, starts the instance of class
    super();
    //app has two states. Any component
    //that has state must use class syntax to create this. state. State is what changes in an app. 
    //state allows you to separate logic from data. 
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users}));
  }

  onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })

  }
//jsx is only used when setting up the view in render. 
  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(this.state.robots.length === 0) {
        return <h1>lLoading</h1>
    } else {
    return (
      <div className="tc">
        <h1 className ="f2">RoboFriends</h1>
        <SearchBox searchChange= {this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
    }
  }
}

export default App;
