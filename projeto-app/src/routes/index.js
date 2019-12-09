import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/" component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
