import React from "react";
import "./index.css";

function ShortLink({
  links,
  toggleLinksDelete,
  setEditToggle,
  setCurrentEditLink,
}) {
  return (
    <div className="shorter_links_container">
      <div className="short_link_info">
        <div
          className="checkbox_simulate"
          onClick={() => {
            setCurrentEditLink(links);
            setEditToggle(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z" />
          </svg>
        </div>
        <div className="short_and_big_link">
          <p className="short_link">{links.short_link}</p>
          <p className="big_link">{links.link}</p>
        </div>
      </div>
      <div className="link_extra_info">
        <p className="link_extra_info_date">Today</p>
        <p className="link_extra_info_views">{links.visits} views</p>
        <div
          onClick={() => toggleLinksDelete(links.id)}
          className="icon_delete_container"
        >
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
