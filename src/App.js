import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chessable code challenge</h1>
        <FontAwesomeIcon
          icon="heart"
          size="2x"
          // size="lg"
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
        <FontAwesomeIcon icon="chess-king" />
      </header>
    </div>
  );
}

export default App;
