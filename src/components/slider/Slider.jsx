import React from "react";
import PropTypes from "prop-types";
import * as constants from "../../utils/constants";
import * as Mui from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = Mui.makeStyles({
  zoomIcon: {
    color: constants.colorPrimaryDark,
  },
  sliderContainer: {
    width: "8rem",
    padding: "0.3125rem 0.625rem",
    margin: "1.5rem 2.5rem 0 0",
    position: "fixed",
    right: 0,
    bottom: "clamp(3rem, 3rem + 1vw, 5rem)",
    display: "flex",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: constants.colorPrimaryLight,
    opacity: 0.9,
  },
  slider: {
    margin: "0 0.5rem",
  },
});

const Slider = ({ handleZoom }) => {
  const cls = useStyles();

  const handleChange = (ev, newValue) => {
    handleZoom(newValue);
  };

  return (
    <>
      <Mui.Hidden xsDown>
        <Mui.Paper elevation={4} className={cls.sliderContainer}>
          <FontAwesomeIcon
            icon="chess"
            fixedWidth
            size="xs"
            className={cls.zoomIcon}
          />
          <Mui.Slider
            id="zoom"
            aria-label="Zoom"
            defaultValue={1}
            min={0.5}
            max={2.5}
            step={0.25}
            marks={constants.zoomValues}
            valueLabelDisplay="auto"
            valueLabelFormat={(x) => x}
            onChange={handleChange}
            className={cls.slider}
          />
          <FontAwesomeIcon
            icon="chess"
            fixedWidth
            size="lg"
            className={cls.zoomIcon}
          />
        </Mui.Paper>
      </Mui.Hidden>
    </>
  );
};

export default Slider;

Slider.propTypes = {
  zoom: PropTypes.number,
  handleZoom: PropTypes.func,
};
