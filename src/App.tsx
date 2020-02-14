import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import AdministrationPage from "./components/administration/AdministrationPage";
import NotFoundPage from "./components/notFound/NotFoundPage";
import { ROUTES } from "./res/constants";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul className="App-ul">
          <li>
            <Link to={ROUTES.HOME}>Dashboard</Link>
          </li>
          <li>
            <Link to={ROUTES.ADMIN}>Administration</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={ROUTES.HOME} component={Dashboard} />
          <Route path={ROUTES.ADMIN} component={AdministrationPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
