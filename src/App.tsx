import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DashboardPage from "./components/dashboard/DashboardPage";
import TopologyListPage from "./components/topologyList/topologyListPage";
import ForecastPage from "./components/forecast/ForecastPage";
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
            <Link to={ROUTES.LIST}>Topologies</Link>
          </li>
          <li>
            <Link to={ROUTES.FORECAST}>Forecast</Link>
          </li>
          <li>
            <Link to={ROUTES.ADMIN}>Administration</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={ROUTES.HOME} component={DashboardPage} />
          <Route path={ROUTES.LIST} component={TopologyListPage} />
          <Route path={ROUTES.FORECAST} component={ForecastPage} />
          <Route path={ROUTES.ADMIN} component={AdministrationPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
