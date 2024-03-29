import React from "react";
import PropTypes from "prop-types";
import "./Piece.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const PieceIcon = styled.div`
  font-size: ${(props) => props.zoom * 1.5}rem;
`;

const Piece = ({ icon, color, zoom }) => {
const literalColor = color === "#111111" ? "black" : "white";

  return (
    <PieceIcon zoom={zoom}>
      <FontAwesomeIcon
        icon={"chess-" + icon}
        id={icon + "-"+ literalColor} 
        fixedWidth
        color={color}
        className="piece"
        title={icon +" "+ literalColor}
      />
    </PieceIcon>
  );
};

export default Piece;

Piece.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  zoom: PropTypes.number,
};
