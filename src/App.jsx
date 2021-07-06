import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Board from "./components/board/Board";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";

function App() {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="app">
      <Header />
      <Board zoom={zoom} />
      <Slider zoom={zoom} handleZoom={setZoom} />
      <Footer />
    </div>
  );
}

export default App;
