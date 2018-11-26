import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import Store from './store/index';

import PrivateRoute from './components/routes/privateRoute';
import NavBar from './components/navbar';
import Home from './pages/home/index';
import Login from './pages/login';
import Register from './pages/register';


import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = {Store}>
        <Router>
          <div className="App">
            <NavBar/>
           
            <Switch>
              <PrivateRoute  exact path="/" component={Home} />
              <Route  path="/login" component={Login} />
              <Route path="/register" component={Register}/>
            </Switch>
             
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
