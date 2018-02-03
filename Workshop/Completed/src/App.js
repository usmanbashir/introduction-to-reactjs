import React, { Component } from 'react';
import './App.css';
import Card from './Card';  // Import the Card component from an external file.
import Form from './Form';  // Import the Form component from an external file.

class App extends Component {
  constructor(props) {
    super(props);

    // Pre-populate the usernames Array stored in the components state,
    // with some dummy names.
    this.state = {usernames: ['usmanbashir']};
  }

  // This method is passed to the Form child component. Which, in turn calls 
  // this method on the parent, when the users adds a new username by 
  // submitting the Form.
  addNewCard(username) {
    // We set the new state using the previous state merged with the new state.
    this.setState(prevState => ({
      usernames: prevState.usernames.concat(username)
    }));
  }

  render() {
    // The map() method creates a new array with the results of calling a arrow 
    // function on every element in the usernames array.
    const cards = this.state.usernames.map((username, index) => {
      return <Card key={index} username={username} />;
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github User List</h1>
        </header>

        <Form addNewCard={(username) => this.addNewCard(username)} />

        { cards }

      </div>
    );
  }
}

export default App;
