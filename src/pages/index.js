import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrimaryLayoutRoute from "../../src/route/PrimaryLayoutRoute";
import AboutPage from "./about";
import HomePage from "./Home";
import ErrorPage from "./error";
export default function Pages() {
  return (
    <Router>
      <Switch>
        <PrimaryLayoutRoute exact path="/" component={HomePage} />
        <PrimaryLayoutRoute path="/about" component={AboutPage} />
        <Route exact path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}
