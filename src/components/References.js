import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class References extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Link to="/about">
          <button type="button" className="btn btn-outline-primary">
            About
          </button>
        </Link>
        <p>Great video, just watch it.</p>
        <iframe name="youtube" title="fuchigami" width="560" height="315" src="https://www.youtube.com/embed/OS1jBjtHodk?rel=0" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}


export default References;
