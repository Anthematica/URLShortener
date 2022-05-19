import React from "react";
import "./index.css";

function ShortLink({ links }) {
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
      </div>
    </div>
  );
}

export { ShortLink };
