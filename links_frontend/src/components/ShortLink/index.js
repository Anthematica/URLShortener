import React from "react";
import "./index.css";

function ShortLink({ links, toggleLinksDelete }) {
  console.log("Desde el hijo", links);
  return (
    <div className="shorter_links_container">
      <div className="short_link_info">
        <div className="checkbox_simulate"></div>
        <div className="short_and_big_link">
          <p className="short_link">{links.short_link}</p>
          <p className="big_link">{links.link}</p>
        </div>
      </div>
      <div className="link_extra_info">
        <p className="link_extra_info_date">Today</p>
        <p className="link_extra_info_views">{links.visits} views</p>
        <div onClick={() => toggleLinksDelete(links.id)}>
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
              fill="#110F24"
              fill-opacity="0.4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export { ShortLink };
