import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Piece = (props) => {
  return (
    <>
      <FontAwesomeIcon
        icon={"chess-" + props.icon}
        fixedWidth
        size="2x"
        color={props.color}
        className="piece"
      />
    </>
  );
};

export default Piece;

Piece.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
