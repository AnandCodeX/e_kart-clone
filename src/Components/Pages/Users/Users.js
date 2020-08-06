import React from "react";
import "./Users.css";
import UserNav from "../../Navigation/UserNav/UserNav";
import "./Users.css";
import ProductNav from "../../Navigation/ProductNav/ProductNav";

const Users = () => {
  return (
    <div className="users">
      <UserNav />
      <ProductNav />
      <h1>User.js</h1>
    </div>
  );
};

export default Users;
