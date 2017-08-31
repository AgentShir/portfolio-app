import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class References extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
            <h1>References</h1>
              <h4>I have no idea who these people are.</h4>
        </div>
              <div className="container">
                <div className="card d-inline bg-info">
                  <div className="card-block">
                    <h4 className="card-title">Manager McManagerson</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Coldstone Creamery, (808)123-4567</h6>
                    <p className="card-text">"I mean, the place didn't burn down."</p>
                  </div>
                  <div className="card-block">
                    <h4 className="card-title">Denise Kimura</h4>
                    <h6 className="card-subtitle mb-2 text-muted">First Hawaiian Bank, (808)422-2111</h6>
                    <p className="card-text">"If it weren't for the computer, I don't think that she would be able to count."</p>
                  </div>
                  <div className="card-block">
                    <h4 className="card-title">Aaron Mirafuentes</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Woodrose (Band Leader), (808)422-2222</h6>
                    <p className="card-text">"Decent singer, too much cowbell."</p>
                  </div>
                </div>
              </div>
              <Link to="/">
              <button type="button" className="btn btn-outline-primary">
                Splash Page/Home
              </button>
              </Link>
      </div>
    );
  }
}


export default References;
