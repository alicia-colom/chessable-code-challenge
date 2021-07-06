import React from "react";
import PropTypes from "prop-types";
import "./Piece.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Piece = ({ icon, color, zoom }) => {
  return (
    <FontAwesomeIcon
      icon={"chess-" + icon}
      fixedWidth
      size={zoom}
      color={color}
      zoom={zoom}
      className="piece"
    />
  );
};

export default Piece;

Piece.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  zoom: PropTypes.number,
};
