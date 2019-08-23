import React from "react";
import "./HeaderComponent.css";

function HeaderComponent() {
  return (
    <header>
      <div className="title"> DAILY NEWS </div>
      <div className="menu">
          <ul>
              <li>Top Headlines</li>
              <li>Everything</li>
          </ul>
      </div>
    </header>
  );
}

export default HeaderComponent;
