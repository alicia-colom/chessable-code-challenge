import React from "react";
import styled from "styled-components";
import "./Chessboard.css";
import Piece from "../piece/Piece";
import * as variables from "../../utils/constants";

const Tile = styled.div`
  background-color: ${(props) =>
    (props.x + props.y) % 2 === 0 ? "#cbdefc" : "#7296B8"};
`;

const Chessboard = () => {
  const board = [];
  const yAxisReversed = variables.yAxis.reverse();

  for (let iX = 0; iX < variables.xAxis.length; iX++) {
    for (let iY = 0; iY < yAxisReversed.length; iY++) {
      const eachTile = variables.xAxis[iX] + yAxisReversed[iY];
      // const xxx = piecesInitialPosition.map((eachPiece) => {
      //   if (eachPiece.x === iX && eachPiece.y === iY)
      //     return (
      //       <Piece icon={eachPiece.icon} color={iY === 0 ? "white" : "black"} />
      //     );
      // });

      board.push(
        <Tile key={eachTile} x={iX} y={iY}>
           {eachTile}{/* {xxx} */}
        </Tile>
      );
    }
  }

  // const piecesInitialPosition = [
  //   {
  //     icon: "chess-knight",
  //     x: 1,
  //     y: 0,
  //   },
  //   {
  //     icon: "chess-knight",
  //     x: 7,
  //     y: 0,
  //   },
  // ];

  return (
    <div id="chessboard" className="boardContainer">
      {board}
    </div>
  );
};

export default Chessboard;
