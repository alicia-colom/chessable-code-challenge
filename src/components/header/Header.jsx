import React from "react";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header>
      <div className="preHeader"></div>
      <div className="headerContainer">
        <h1 className="headerTitle">Chessable code challenge</h1>
      </div>
    </header>
  );
}

export default Header;
