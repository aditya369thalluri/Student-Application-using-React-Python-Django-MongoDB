import React from 'react';
import logo from './logo.svg';
import Main from './Components/main.js'
import './App.css';
import UpdateRow from './Components/updateRowDetails.js';
import AddRow from './Components/addRowDetails.js';

import {
  Router,
  Switch,
  Route,
  Link

} from "react-router-dom";

import history from './history';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   
    <div className="App">     
      <Router history={history}>
      <Switch>
          <Route exact path="/" component = {Main}/>
          <Route path="/add" component = {AddRow}/>
          <Route path="/update" component = {UpdateRow}/>
        </Switch>
        </Router>
    </div>
   
  );
}

export default App;
