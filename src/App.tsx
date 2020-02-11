import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Administration from "./components/Administration";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ul>
            <li>
              <Link to="/">Dasboard</Link>
            </li>
            <li>
              <Link to="/admin">Administration</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/admin">
              <Administration />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
