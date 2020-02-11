import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AdministrationPage from "./components/administration/AdministrationPage";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul className="App-ul">
          <li>
            <Link to="/">Dashboard</Link>
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
            <AdministrationPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
