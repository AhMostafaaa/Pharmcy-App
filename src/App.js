import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Nav from './components/navbar';
import Home from './components/home';
import About from './components/about'
import Contact from './components/contact';
import Footer from './components/footer';
import Health from './components/healthinfo';
import Login from './components/login';
import Signup from './components/signup';

import Notfound from './components/notfound';


import './App.css';


class App extends Component {
  render() {

    return (
     
      <BrowserRouter>
      <div className="App">
      <Nav />
         <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/healthInfo" component={Health} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={Notfound} />
          </Switch>
    
      <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
