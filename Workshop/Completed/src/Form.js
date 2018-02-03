import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    // Set the initial value of the text input to be blank.
    this.state = {text: ''};
  }

  handleSubmit(e) {
    // Stop the HTML form from submitting and reloading the page.
    e.preventDefault();

    // Call the addNewCard function received from the parent component as a 
    // prop with the value of the text input.
    this.props.addNewCard(this.state.text);

    // With the new username added to the parent components list. Clear out the 
    // value for the text input.
    this.setState({ text: '' });
  }

  // Update the components internal state every time the user changes the text 
  // input value.
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    // Wire up the HTML form and text input events. And bind the text inputs 
    // value to the components internal state.
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <br />
        <input placeholder='github username'
               onChange={(e) => this.handleChange(e)}
               value={this.state.text} />
        <button>Add</button>
        <br />
        <br />
        <hr />
      </form>
    );
  }
}
