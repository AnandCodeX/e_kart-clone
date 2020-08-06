import React from "react";
import MainNav from "../../Navigation/MainNav/MainNav";
import ProductNav from "../../Navigation/ProductNav/ProductNav";
import "./Main.css";

const Main = () => {
  return (
    <div className="main_style">
      <MainNav />
      <ProductNav />
    </div>
  );
};

export default Main;
