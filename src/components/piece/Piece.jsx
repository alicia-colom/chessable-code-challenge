{
  /* <FontAwesomeIcon
icon="heart"
size="2x"
flip="vertical"
fixedWidth
border
color="red"
/>
<FontAwesomeIcon icon="brain" />
<FontAwesomeIcon icon="search-minus" />
<FontAwesomeIcon icon="search-plus" />
<FontAwesomeIcon icon="chess-board" />
<FontAwesomeIcon icon="chess" />
<FontAwesomeIcon icon="chess-knight" />
<FontAwesomeIcon icon="chess-pawn" />
<FontAwesomeIcon icon="chess-rook" />
<FontAwesomeIcon icon="chess-bishop" />
<FontAwesomeIcon icon="chess-queen" />
<FontAwesomeIcon icon="chess-king" /> */
}
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Piece = (props) => {
  return (
    <>
      <FontAwesomeIcon icon={props.icon} className={props.color} />
    </>
  );
};

export default Piece;
