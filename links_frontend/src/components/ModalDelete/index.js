import React from "react";
import "./index.css";

function ModalDelete({ setToggleDelete, handleDelete }) {
  return (
    <div className="modal_wrapper">
      <div className="modal_container_delete">
        <h1>Delete Links</h1>
        <p>Are you sure? You can't undo this action afterwards</p>
        <div className="buttons_container_modal_delete">
          <button onClick={() => setToggleDelete(false)}>Cancel</button>
          <button onClick={() => handleDelete()} className="delete_button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export { ModalDelete };
