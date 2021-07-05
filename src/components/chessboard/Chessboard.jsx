import React from "react";
import "./Chessboard.css";
import * as variables from "../../utils/constants";

const Chessboard = () => {
  const board = [];
  const xAxisReversed = variables.xAxis.reverse();

  for (let iY = 0; iY < variables.yAxis.length; iY++) {
    for (let iX = 0; iX < xAxisReversed.length; iX++) {
      const eachTile = variables.yAxis[iY] + xAxisReversed[iX];
      board.push(
        <div key={eachTile} className="tile">
          {eachTile}
        </div>
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
