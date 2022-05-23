import React from "react";
import "../Links/index.css";
import "./index.css";
import { EditLinks } from "./EditLink.js";

function EditLink({
  setEditToggle,
  editToggle,
  currentEditLink,
  links,
  setLinks,
}) {
  return (
    <div className="links_container edit_link">
      <div className="add_links_container">
        <h1>Edit link</h1>
      </div>
      {editToggle && (
        <EditLinks
          setEditToggle={setEditToggle}
          currentEditLink={currentEditLink}
          links={links}
          setLinks={setLinks}
        ></EditLinks>
      )}
    </div>
  );
}
export { EditLink };
