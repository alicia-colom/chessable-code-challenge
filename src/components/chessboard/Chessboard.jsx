import React from "react";
import styled from "styled-components";
import "./Chessboard.css";
import Piece from "../piece/Piece";
import * as variables from "../../utils/constants";

const Tile = styled.div`
  background-color: ${(props) =>
    (props.x + props.y) % 2 === 0 ? "#cbdefc" : "#7296B8"};
  display: flex;
  align-items: center;
`;

const Chessboard = () => {
  const board = [];
  const yAxisReversed = variables.yAxis.reverse();

  const piecesInitalPosition = [];
  function buildPiece(icon, x, y) {
    this.icon = icon;
    this.x = x;
    this.y = y;
  }

  piecesInitalPosition.push(new buildPiece("rook", 0, 0));
  piecesInitalPosition.push(new buildPiece("rook", 7, 0));
  piecesInitalPosition.push(new buildPiece("knight", 1, 0));
  piecesInitalPosition.push(new buildPiece("knight", 6, 0));
  piecesInitalPosition.push(new buildPiece("bishop", 2, 0));
  piecesInitalPosition.push(new buildPiece("knight", 5, 0));
  piecesInitalPosition.push(new buildPiece("queen", 4, 0));
  piecesInitalPosition.push(new buildPiece("king", 3, 0));

  piecesInitalPosition.push(new buildPiece("rook", 0, 7));
  piecesInitalPosition.push(new buildPiece("rook", 7, 7));
  piecesInitalPosition.push(new buildPiece("knight", 1, 7));
  piecesInitalPosition.push(new buildPiece("knight", 6, 7));
  piecesInitalPosition.push(new buildPiece("bishop", 2, 7));
  piecesInitalPosition.push(new buildPiece("bishop", 5, 7));
  piecesInitalPosition.push(new buildPiece("queen", 4, 7));
  piecesInitalPosition.push(new buildPiece("king", 3, 7));

  for (let i = 0; i < 8; i++) {
    piecesInitalPosition.push(new buildPiece("pawn", i, 1));
    piecesInitalPosition.push(new buildPiece("pawn", i, 6));
  }

  for (let iY = 0; iY < yAxisReversed.length; iY++) {
    for (let iX = 0; iX < variables.xAxis.length; iX++) {
      const eachTile = variables.xAxis[iX] + yAxisReversed[iY];
      const xxx = piecesInitalPosition.map((eachPiece) => {
        if (eachPiece.x === iX && eachPiece.y === iY)
          return (
            <Piece
              key={eachTile}
              icon={eachPiece.icon}
              color={iY <= 1 ? "white" : "black"}
            />
          );
      });

      board.push(
        <Tile key={eachTile} x={iX} y={iY}>
          {xxx}
          {/* <span className="tileName">{eachTile}</span> */}
        </Tile>
      );
    }
  }

  return (
    <div id="chessboard" className="boardContainer">
      {board}
    </div>
  );
};

export default Chessboard;
