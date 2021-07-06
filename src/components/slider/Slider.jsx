import React from "react";
import PropTypes from "prop-types";
import "./Slider.css";
import * as Mui from '@material-ui/core';
// import { makeStyles, Paper, Slider, Button } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = ({ zoom, handleZoom }) => {
  const zoomIn = () => {
    if (zoom < 6) handleZoom(zoom * 2);
  };

  const zoomOut = () => {
    if (zoom > 1.25) handleZoom(zoom / 2);
  };

  return (
    <>
      <Mui.Paper elevation={4} className="sliderContainer">
        <FontAwesomeIcon
          icon="search-minus"
          fixedWidth
          color="purple"
          size="xs"
          className="zoomIcon"
        />
        <Mui.Button
          className="slideButton"
          onClick={() => zoomOut()}
        >
          25
        </Mui.Button>
        <Mui.Button className="slideButton" onClick={() => zoomIn()}>
          50
        </Mui.Button>
        <Mui.Button className="slideButton" onClick={() => zoomIn()}>
          75
        </Mui.Button>
        <FontAwesomeIcon
          icon="search-plus"
          fixedWidth
          size="lg"
          color="purple"
          className="zoomIcon"
        />
      </Mui.Paper>
    </>
  );
};

export default Slider;

Slider.propTypes = {
  zoom: PropTypes.number,
  handleZoom: PropTypes.func,
};
