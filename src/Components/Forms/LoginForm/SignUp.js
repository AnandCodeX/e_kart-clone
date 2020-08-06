import React from "react";
import "./Login.css";
import MainNav from "../../Navigation/MainNav/MainNav";
import Admin from "../../Pages/Admin/Admin";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <React.Fragment>
      <MainNav />
      <div className="signUpForm">
        <div className="hide-md-lg" style={{}}></div>
        <h1 style={{ textAlign: "center" }}>SignUp Form</h1>
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="mobile" name="mobile" placeholder="Mobile" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="Re-Password"
          placeholder="Re-Password"
          required
        />
        <NavLink to="/admin">
          <input type="submit" value="SignUp" />
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
