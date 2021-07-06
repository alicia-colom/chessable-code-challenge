import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Chessboard from "./components/chessboard/Chessboard";

function App() {
  return (
    <div className="app">
      <Header />
      <Chessboard />
      <Footer />
    </div>
  );
}

export default App;
