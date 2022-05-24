import "./index.css";

function LinksLoading() {
  return (
    <div className="shorter_links_container_loading">
      <div className="edit_icon_loading"></div>
      <div className="links_loading">
        <p className="short_link_loading"></p>
        <p className="big_link_loading"></p>
      </div>
      <div className="links_extra_loading">
        <p></p>
        <p></p>
        <div className="delete_icon_loading"></div>
      </div>
    </div>
  );
}

export { LinksLoading };
