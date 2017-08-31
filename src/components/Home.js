import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Distractions R Us (Or rather, me...)</h1>
          <h5>If I can help you waste time, then my work here is done.</h5>
            <h6>Because, really... I do not force you to do anything that you do not want to.</h6>
            <Link to="/About">
              <button type="button" className="btn btn-outline-primary">
                Click Me (Or Not)
              </button>
            </Link>

      </div>
    );
  }
}

export default Home;
