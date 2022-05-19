import "./index.css";
import React from "react";
function Header() {
  return (
    <header className="header_container">
      <div className="searcher">
        <span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.625 10.5H11.0325L10.8225 10.2975C11.5575 9.4425 12 8.3325 12 7.125C12 4.4325 9.8175 2.25 7.125 2.25C4.4325 2.25 2.25 4.4325 2.25 7.125C2.25 9.8175 4.4325 12 7.125 12C8.3325 12 9.4425 11.5575 10.2975 10.8225L10.5 11.0325V11.625L14.25 15.3675L15.3675 14.25L11.625 10.5ZM7.125 10.5C5.2575 10.5 3.75 8.9925 3.75 7.125C3.75 5.2575 5.2575 3.75 7.125 3.75C8.9925 3.75 10.5 5.2575 10.5 7.125C10.5 8.9925 8.9925 10.5 7.125 10.5Z"
              fill="#110F24"
              fillOpacity="0.4"
            />
          </svg>
        </span>
        <input className="input_search" placeholder="Search..." />
      </div>
      <div className="header_navigation_icons">
        <svg
          width="22"
          height="17"
          viewBox="0 0 22 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 8H19V9.5H12V8ZM12 5.5H19V7H12V5.5ZM12 10.5H19V12H12V10.5ZM20 0H2C0.9 0 0 0.9 0 2V15C0 16.1 0.9 17 2 17H20C21.1 17 22 16.1 22 15V2C22 0.9 21.1 0 20 0ZM20 15H11V2H20V15Z"
            fill="#110F24"
            fill-opacity="0.4"
          />
        </svg>
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.89 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z"
            fill="#110F24"
            fill-opacity="0.4"
          />
        </svg>
      </div>
    </header>
  );
}

export { Header };
