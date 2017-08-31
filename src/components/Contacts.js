import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contacts extends Component {
  render() {
    return (
      <div className="container-fluid">
        4650 W. Tropicana Ave.
        Las Vegas, NV 89103
        <Link to="/references">
          <button type="button" className="btn btn-outline-primary">
            References
          </button>
        </Link>
      </div>
    );
  }
}


export default Contacts;
