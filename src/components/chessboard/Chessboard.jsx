import React from "react";
import PropTypes from "prop-types";
import "./Chessboard.css";
import Piece from "../piece/Piece";
import * as constants from "../../utils/constants";
import styled from "styled-components";

const Tile = styled.div`
  background-color: ${(props) =>
    (props.x + props.y) % 2 === 0 ? "#cbdefc" : "#7296B8"};
  display: flex;
  align-items: center;
`;

const Board = styled.div`
  height: ${(props) => props.zoom * 15.5}rem;
  width: ${(props) => props.zoom * 15.5}rem;
  margin-top: 1.5rem;
  padding: 0.1rem;

  align-self: center;
  align-content: center;
  justify-content: center;
  display: grid;
  gap: 0;
  grid-template-columns: repeat(8, ${(props) => props.zoom * 1.875}rem);
  grid-template-rows: repeat(8, ${(props) => props.zoom * 1.875}rem);

  background-color: #313143; /* colorSecondary */
  border-radius: 5px;

  font-size: 0.75rem;
  color: #404040; /* colorFontMain */
`;

const Chessboard = ({ zoom }) => {
  const board = [];
  const ranksReversed = constants.ranks.reverse();

  const piecesInitialPosition = [];
  function buildPiece(icon, x, y) {
    this.icon = icon;
    this.x = x;
    this.y = y;
  }

  piecesInitialPosition.push(new buildPiece("rook", 0, 0));
  piecesInitialPosition.push(new buildPiece("rook", 7, 0));
  piecesInitialPosition.push(new buildPiece("knight", 1, 0));
  piecesInitialPosition.push(new buildPiece("knight", 6, 0));
  piecesInitialPosition.push(new buildPiece("bishop", 2, 0));
  piecesInitialPosition.push(new buildPiece("knight", 5, 0));
  piecesInitialPosition.push(new buildPiece("queen", 4, 0));
  piecesInitialPosition.push(new buildPiece("king", 3, 0));

  piecesInitialPosition.push(new buildPiece("rook", 0, 7));
  piecesInitialPosition.push(new buildPiece("rook", 7, 7));
  piecesInitialPosition.push(new buildPiece("knight", 1, 7));
  piecesInitialPosition.push(new buildPiece("knight", 6, 7));
  piecesInitialPosition.push(new buildPiece("bishop", 2, 7));
  piecesInitialPosition.push(new buildPiece("bishop", 5, 7));
  piecesInitialPosition.push(new buildPiece("queen", 4, 7));
  piecesInitialPosition.push(new buildPiece("king", 3, 7));

  for (let i = 0; i < 8; i++) {
    piecesInitialPosition.push(new buildPiece("pawn", i, 1));
    piecesInitialPosition.push(new buildPiece("pawn", i, 6));
  }

  for (let iY = 0; iY < ranksReversed.length; iY++) {
    for (let iX = 0; iX < constants.files.length; iX++) {
      const eachTileIdentifier = constants.files[iX] + ranksReversed[iY];
      const tileContent = piecesInitialPosition
        .filter((eachPiece) => eachPiece.x === iX && eachPiece.y === iY)
        .map((eachPiece) => (
          <Piece
            key={eachTileIdentifier}
            icon={eachPiece.icon}
            color={iY <= 1 ? "#FEFEFE" : "#111111"} // colorWhiter : colorBlacker
            zoom={zoom}
          />
        ));

      board.push(
        <Tile
          key={eachTileIdentifier}
          id={eachTileIdentifier}
          x={iX}
          y={iY}
          zoom={zoom}
        >
          {tileContent}
        </Tile>
      );
    }
  }

  return (
    <Board id="board" zoom={zoom}>
      {board}
    </Board>
  );
};

export default Chessboard;

Chessboard.propTypes = {
  zoom: PropTypes.number,
};
