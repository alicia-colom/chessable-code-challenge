import React from "react";
import "./Chessboard.css";
import * as variables from "../../utils/constants";
import styled from "styled-components";

const Chessboard = () => {
  const Tile = styled.div`
    background-color: ${(props) =>
      (props.x + props.y) % 2 === 0 ? "#cbdefc" : "#7296B8"};
  `;

  const board = [];
  const xAxisReversed = variables.xAxis.reverse();

  const isEven = (x, y) => {
    (x + y) % 2 === 0 ? true : null;
  };

  for (let iY = 0; iY < variables.yAxis.length; iY++) {
    for (let iX = 0; iX < xAxisReversed.length; iX++) {
      const eachTile = variables.yAxis[iY] + xAxisReversed[iX];
      isEven(iX, iY);

      board.push(
        <Tile key={eachTile} className="tile" x={iX} y={iY}>
          {eachTile}
        </Tile>
      );
    }
  }
  console.log(xAxisReversed);

  return (
    <div id="chessboard" className="boardContainer">
      {board.reverse()}
    </div>
  );
};

export default Chessboard;
