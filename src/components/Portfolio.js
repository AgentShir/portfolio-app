import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-3">Portfolio</h1>
            <p className="lead">Because I Actually Do Stuff (Or Pretend Very Well)</p>
        </div>
              <Link to="/about">
                <button type="button" className="btn btn-outline-primary">
                  This Button Will Take You Somewhere
                </button>
              </Link>
                <p>Great video, just watch it.</p>
                  <iframe name="youtube" title="fuchigami" width="560" height="315" src="https://www.youtube.com/embed/OS1jBjtHodk?rel=0" frameborder="0" allowfullscreen></iframe>
                  <p><img src="http://lorempixel.com/700/400/sports" alt="Random images popping up"/></p>
                  <p><img src="http://lorempixel.com/700/400/city" alt="Random images popping up"/></p>
                  <p><img src="http://lorempixel.com/700/400/abstract" alt="Random images popping up"/></p>
      </div>
    );
  }
}


export default Portfolio;
