import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import EmployerProfile from "./EmployerProfile";
import JobCard from "./JobCard";
import Login from "./Login";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/employee" component={JobCard} />
        <Route exact path="/employer/:id" component={EmployerProfile} />
      </Switch>
    </Router>
  );
};

export default Routes;
