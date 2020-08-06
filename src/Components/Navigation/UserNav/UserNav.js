import React from "react";
import "./UserNav.css";
import { NavLink } from "react-router-dom";
import Home from "../../../Images/Home.png";
import Cart from "../../../Images/Cart.png";

const UserNav = () => {
  return (
    <div className="userNav">
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
        <span className="userDropmenuBtn">
          <div className="homeIcon">
            <NavLink to="/users/profile">
              <span>Users</span>
            </NavLink>
          </div>
          <div className="userDropmenu">
            <NavLink to="/users/profile">Profile</NavLink>
            <NavLink to="/users/order">Orders</NavLink>
            <NavLink to="/users/wishlist">Wishlist</NavLink>
            <NavLink to="/">Logout</NavLink>
          </div>
        </span>
        <NavLink to="/cart">
          <img src={Cart} className="homeIcon" alt="homeIcon" width="30px" />
          <span>Cart</span>
        </NavLink>
      </div>
    </div>
  );
};

export default UserNav;
