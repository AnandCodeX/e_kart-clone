import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import MainNav from "../../Navigation/MainNav/MainNav";

const Login = () => {
  return (
    <React.Fragment>
      <MainNav />

      <div className="loginForm">
        <div className="Container">
          <form action="/action_page.php">
            <div className="row">
              <h2 style={{ textAlign: "center" }}>
                Login with Social Media or Manually
              </h2>
              <div className="col">
                <a href="#" className="fb btn">
                  <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                </a>
                <a href="#" className="twitter btn">
                  <i className="fa fa-twitter fa-fw"></i> Login with Twitter
                </a>
                <a href="#" className="google btn">
                  <i className="fa fa-google fa-fw"></i> Login with Google+
                </a>
              </div>

              <div className="col">
                <div className="hide-md-lg">
                  <p>Or sign in manually:</p>
                </div>

                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <NavLink to="/users">
                  <input type="submit" value="Login" />
                </NavLink>
              </div>
            </div>
          </form>
        </div>

        <div className="bottom-container ">
          <div className="row">
            <div className="col">
              <NavLink to="/signup" style={{ color: "white" }} className="btn">
                Sign up
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="#" style={{ color: "white" }} className="btn">
                Forgot password?
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
