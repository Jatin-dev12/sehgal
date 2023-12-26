import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import services from './componets/services';
import router, { Routes,route  } from "react-router-dom";
import Header from './componets/Header';
import Sonimam from './componets/sonimam';
import { BrowserRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 function App() {  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">services</Link>
            </li>
            </ul>
        </nav>
        <Switch>
          <Route path="/services">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  ); 

}

export default App;
