import React from "react";
import "./index.css";
import { ShortLink } from "../ShortLink";
import { LinksLoading } from "../LinkLoading";

function Links({
  toggle,
  links,
  toggleLinksDelete,
  setEditToggle,
  setCurrentEditLink,
  loading,
}) {
  return (
    <div className="links_container">
      <div className="add_links_container">
        <h1>Links</h1>
        <button onClick={() => toggle(true)}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.99998 0.333344C4.63179 0.333344 4.33331 0.63182 4.33331 1.00001V4.33334H0.99998C0.63179 4.33334 0.333313 4.63182 0.333313 5.00001C0.333313 5.3682 0.63179 5.66668 0.999979 5.66668H4.33331V9.00001C4.33331 9.3682 4.63179 9.66668 4.99998 9.66668C5.36817 9.66668 5.66665 9.3682 5.66665 9.00001V5.66668H8.99998C9.36817 5.66668 9.66665 5.3682 9.66665 5.00001C9.66665 4.63182 9.36817 4.33334 8.99998 4.33334H5.66665V1.00001C5.66665 0.63182 5.36817 0.333344 4.99998 0.333344Z"
              fill="#110F24"
            />
          </svg>
        </button>
      </div>
      <div className="scroll_container">
        {loading &&
          new Array(5).fill().map((item, index) => {
            return <LinksLoading key={index}></LinksLoading>;
          })}
        {links.map((item) => {
          return (
            <ShortLink
              key={item.id}
              links={item}
              toggleLinksDelete={toggleLinksDelete}
              setEditToggle={setEditToggle}
              setCurrentEditLink={setCurrentEditLink}
            ></ShortLink>
          );
        })}
      </div>
    </div>
  );
}

export { Links };
