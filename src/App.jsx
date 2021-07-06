import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Chessboard from "./components/chessboard/Chessboard";

function App() {
  return (
    <div className="app">
      <Header />

      <Chessboard />
    </div>
  );
}

export default App;
