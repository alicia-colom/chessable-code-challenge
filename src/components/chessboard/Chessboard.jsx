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

  function buildPiece(icon, x, y) {
    this.icon = icon;
    this.x = x;
    this.y = y;
  }
  const rookWhiteLeft = new buildPiece("rook", 0, 0);
  const rookWhiteRight = new buildPiece("rook", 7, 0);
  const knightWhiteLeft = new buildPiece("knight", 1, 0);
  const knightWhiteRight = new buildPiece("knight", 6, 0);
  const bishopWhiteLeft = new buildPiece("bishop", 2, 0);
  const bishopWhiteRight = new buildPiece("knight", 5, 0);
  const queenWhite = new buildPiece("queen", 4, 0);
  const kingWhite = new buildPiece("king", 3, 0);

  const rookBlackLeft = new buildPiece("rook", 0, 7);
  const rookBlackRight = new buildPiece("rook", 7, 7);
  const knightBlackLeft = new buildPiece("knight", 1, 7);
  const knightBlackRight = new buildPiece("knight", 6, 7);
  const bishopBlackLeft = new buildPiece("bishop", 2, 7);
  const bishopBlackRight = new buildPiece("bishop", 5, 7);
  const queenBlack = new buildPiece("queen", 3, 7);
  const kingBlack = new buildPiece("king", 4, 7);

  const piecesInitalPosition = [];
  piecesInitalPosition.push(
    rookWhiteLeft,
    rookWhiteRight,
    knightWhiteLeft,
    knightWhiteRight,
    bishopWhiteLeft,
    bishopWhiteRight,
    queenWhite,
    kingWhite,
    rookBlackLeft,
    rookBlackRight,
    knightBlackLeft,
    knightBlackRight,
    bishopBlackLeft,
    bishopBlackRight,
    queenBlack,
    kingBlack
  );
  for (let i = 0; i < 8; i++) {
    const pawnWhite = new buildPiece("pawn", i, 1);
    const pawnBlack = new buildPiece("pawn", i, 6);
    piecesInitalPosition.push(pawnWhite, pawnBlack);
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
