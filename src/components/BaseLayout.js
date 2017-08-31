import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class BaseLayout extends Component{
  render() {
    return(

      <div className="container">
        <nav className="navbar navbar-inverse bg-inverse">
          <nav className="row navbar">
            <span className="navbar-text">
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                </li>
              </ul>
            </span>
          </nav>
        </nav>

        {this.props.children}
      </div>
    );
  }
}


export default BaseLayout;
