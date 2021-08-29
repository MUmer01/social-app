import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../features/login";
import Register from "../features/signup";
import AuthProvider from "../Provider/Auth";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect exact from="/" to="/login" />
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
