import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './styles/App.css';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import BaseLayout from './components/BaseLayout';
import Contacts from './components/Contacts';
import References from './components/References'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/references" component={References}/>
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
