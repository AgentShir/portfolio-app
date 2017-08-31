import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-3">About</h1>
            <blockquote>"I have come here to chew bubble gum and kick ass, and I'm all out of bubble gum."</blockquote>
              <p><img src="http://lorempixel.com/700/400" alt="Random images popping up"/></p>
                  <Link to="/portfolio">
                    <button type="button" className="btn btn-outline-primary">
                     TO PORTFOLIO
                    </button>
                  </Link>
        </div>
      </div>
    );
  }
}


export default About;
