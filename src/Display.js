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
import Cart from "./Components/Pages/Cart/Cart";
import Admin from "./Components/Pages/Admin/Admin";
import AdminItems from "./Components/Pages/Admin/AdminItems";
import AdminUsers from "./Components/Pages/Admin/AdminUsers";
import Users from "./Components/Pages/Users/Users";
import Wishlist from "./Components/Pages/Users/WishList/Wishlist";
import Order from "./Components/Pages/Users/Order/Order";
import Profile from "./Components/Pages/Users/Profile/Profile";

const Display = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        {/* ----------------------------Login and SignUp Routes ------------------------ */}
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        {/* ----------------------------User Routes ------------------------ */}
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/users/wishlist" exact>
          <Wishlist />
        </Route>
        <Route path="/users/order" exact>
          <Order />
        </Route>
        <Route path="/users/profile" exact>
          <Profile />
        </Route>
        {/* ----------------------------Admin Routes ------------------------ */}
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/admin/adminitems" exact>
          <AdminItems />
        </Route>
        <Route path="/admin/adminusers" exact>
          <AdminUsers />
        </Route>

        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Display;
