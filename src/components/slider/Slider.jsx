import React from "react";
import PropTypes from "prop-types";
import "./Slider.css";
import * as constants from "../../utils/constants";
import * as Mui from "@material-ui/core";
// import { makeStyles, Paper, Slider, Button } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = Mui.makeStyles({
  zoomIcon: {
    color: constants.colorPrimaryDark,
  },
  sliderContainer: {
    width: "fit-content",
    padding: "0.375rem",
    margin: "1.5rem 2.75rem 0 0",
    position: "fixed",
    right: 0,
    bottom: "clamp(3rem, 3rem + 1vw, 5rem)",
    backgroundColor: constants.colorPrimaryLight,
  },
  slideButton: {
    height: "1rem",
    width: "1rem",
    color: constants.colorWhiter,
  },
});

const Slider = ({ zoom, handleZoom }) => {
  const cls = useStyles();

  const zoomIn = () => {
    if (zoom < 6) handleZoom(zoom * 2);
  };

  const zoomOut = () => {
    if (zoom > 1.25) handleZoom(zoom / 2);
  };

  return (
    <>
      <Mui.Paper elevation={4} className={cls.sliderContainer}>
        <FontAwesomeIcon
          icon="chess"
          fixedWidth
          size="xs"
          className={cls.zoomIcon}
        />
        <Mui.Button className={cls.slideButton} onClick={() => zoomOut()}>
          25
        </Mui.Button>
        <Mui.Button className={cls.slideButton} onClick={() => zoomIn()}>
          50
        </Mui.Button>
        <Mui.Button className={cls.slideButton} onClick={() => zoomIn()}>
          75
        </Mui.Button>
        <FontAwesomeIcon
          icon="chess"
          fixedWidth
          size="lg"
          className={cls.zoomIcon}
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
