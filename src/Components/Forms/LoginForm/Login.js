import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login.js</h1>
      <NavLink to="/signup">SignUp</NavLink>
    </div>
  );
};

export default Login;
