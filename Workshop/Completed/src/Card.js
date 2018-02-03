import React, { Component } from 'react';
import jQuery from 'jquery';  // Import jQuery from the installed NPM package.

export default class Card extends Component {
  constructor(props) {
    super(props);

    // Set out state to blank on initialization.
    this.state = {};
  }

  // Load user profile data from the GitHub API endpoint using the provided 
  // username by the parent prop when this component is mounted to its parent.  
  // And, store it internally as the components state.
  componentDidMount() {
    jQuery.get(`https://api.github.com/users/${this.props.username}`, (data) => {
      this.setState(data);
    });
  }

  // Render the image for the users avatar and their full name received from 
  // the GitHub API.
  render() {
    return (
      <div>
        <br />
        <img alt='' src={this.state.avatar_url} width='80' />
        <h3>{this.state.name}</h3>
        <br />
      </div>
    );
  }
}
