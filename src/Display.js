import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Main from "./Components/Pages/Main/Main";
import Login from "./Components/Forms/LoginForm/Login";
import SignUp from "./Components/Forms/LoginForm/SignUp";

const Display = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Display;
