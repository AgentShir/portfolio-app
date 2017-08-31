import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contacts extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Contacts</h1>
            <h6>If you really insist on being able to find me...</h6>
        </div>
        <div className="container d-inline bg-primary">
          <ul>
            <div>
              <a href="https://www.facebook.com/agent.shir" className="list-group-item">Facebook</a>
            </div>
            <div>
              <a href="mailto:whovianshir@gmail.com?Subject=Hello%20again" className="list-group-item">E-mail me!</a>
            </div>
            <li>(808)422-2222</li>
            <li>Porta ac consectetur ac</li>
            <li>Vestibulum at eros</li>
            </ul>
  
            </div>
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
