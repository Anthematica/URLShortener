import React from "react";
import "./index.css";

function AddLinkModal({ toggle }) {
  return (
    <div className="modal_wrapper">
      <button className="modal_wrapper_cancel" onClick={() => toggle(false)}>
        X
      </button>
      <div className="modal_link">
        <div className="header_model">
          <h1>Add a new Link below</h1>
        </div>
        <form className="modal_form">
          <input className="modal_input" placeholder="Add a link"></input>
          <button>Create link</button>
        </form>
      </div>
    </div>
  );
}

export { AddLinkModal };
