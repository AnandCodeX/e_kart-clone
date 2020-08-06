import React, { useState } from "react";
import AdminItemNav from "../../Navigation/AdminNav/AdminItemNav";
import "./AdminItems.css";
import Modal from "../../../HOC/Modal";
import AdminAddItem from "./AdminAddItem/AdminAddItem";

const AdminItems = (props) => {
  const [state, newState] = useState(false);
  const showAddItemModal = () => {
    newState(true);
  };

  const addItemCancelHandler = () => {
    newState(false);
  };

  return (
    <div className="adminItems">
      <AdminItemNav addItemClicked={showAddItemModal} />
      <h1>AdminItems.js</h1>
      <Modal show={state} modalClosed={addItemCancelHandler}>
        <AdminAddItem />
      </Modal>
    </div>
  );
};

export default AdminItems;
