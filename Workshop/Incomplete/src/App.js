import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AddNewUser extends Component {
  // Renders a simple HTML text input and Submit button.
  render() {
    return (
      <div>
        <input type='text' placeholder='github username' />
        
        <input type='submit' value='Add' />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    // Pre-populate the usernames Array stored in the components state,
    // with some dummy names.
    this.state = {
      usernames: ['usman', 'ali', 'jack']
    };
  }

  render() {
    // The map() method creates a new array with the results of calling a 
    // anonymous function on every element in the usernames array.
    const usersList = this.state.usernames.map(function(username) {
      // Return a basic component composed of the HTML paragraph element with 
      // the username enclosed.
      return <p>{username}</p>;
    });

    // Render the <AddNewUser /> Component along with the list of users.
    return (
      <div className="App">
        <br />

        <AddNewUser />
        <br />
        <br />

        {usersList}
      </div>
    );
  }
}

export default App;
