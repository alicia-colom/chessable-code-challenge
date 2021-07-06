import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Board from "./components/board/Board";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Board />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
