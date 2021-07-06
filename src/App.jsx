import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Chessboard from "./components/chessboard/Chessboard";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";

function App() {
  const [zoom, setZoom] = useState(1);

  console.log("new Zoom value:", zoom);
  
  return (
    <div className="app">
      <Header />
      <Chessboard zoom={zoom} />
      <Slider handleZoom={setZoom} />
      <Footer />
    </div>
  );
}

export default App;
