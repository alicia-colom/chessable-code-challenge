import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="footerContainer">
      <small className="footerText">
        Made with{" "}
        <FontAwesomeIcon icon="brain" fixedWidth size="sm" color="#fabada" /> and{" "}
        <FontAwesomeIcon icon="heart" fixedWidth size="sm" color="red" /> by{" "}
        <a
          className="footerCredits"
          href="https://www.linkedin.com/in/aliciacolomortega/"
          target="_blank"
          rel="noreferrer"
        >
          Alicia Colom
        </a>
      </small>
    </footer>
  );
}

export default Footer;
