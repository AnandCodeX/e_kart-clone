import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../../../Images/Home.png";
import "./AdminNav.css";

const AdminItemNav = (props) => {
  return (
    <div className="adminItemNav">
      <div className="logo">
        <NavLink to="/">
          <img src={Home} className="homeIcon" alt="homeIcon" width="30px" />
          <span>Home</span>
        </NavLink>
      </div>

      <div className="search_container">
        <form role="search" method="get" className="search-form form" action="">
          <label>
            <span className="screen-reader-text">Search for...</span>
            <input
              type="search"
              className="search-field"
              placeholder="Type something..."
              name="s"
              title=""
            />
          </label>
          <input
            type="submit"
            className="search-submit search_button"
            value="Search"
          />
        </form>
      </div>

      <div className="logincart">
        <button onClick={props.addItemClicked} type="button">
          <span className="loginBttn">Add Items</span>
        </button>
        <NavLink to="/admin/adminusers">
          <span>Users</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminItemNav;
