import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <p><img src="http://lorempixel.com/700/400" alt="Random images popping up"/></p>
            <Link to="/portfolio">
              <button type="button" className="btn btn-outline-primary">
               TO PORTFOLIO
              </button>
            </Link>
      </div>
    );
  }
}


export default About;
