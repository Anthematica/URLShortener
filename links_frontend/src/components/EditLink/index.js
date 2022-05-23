import React from "react";
import "../Links/index.css";
import "./index.css";
import { EditLinks } from "./EditLink.js";

function EditLink({ setEditToggle, editToggle, currentEditLink }) {
  return (
    <div className="links_container edit_link">
      <div className="add_links_container">
        <h1>Edit link</h1>
      </div>
      {editToggle && (
        <EditLinks
          setEditToggle={setEditToggle}
          currentEditLink={currentEditLink}
        ></EditLinks>
      )}
    </div>
  );
}
export { EditLink };
