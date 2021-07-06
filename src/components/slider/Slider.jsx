import React from "react";
import PropTypes from "prop-types";
import * as constants from "../../utils/constants";
import * as Mui from "@material-ui/core";
import CircleIcon from "@material-ui/icons/FiberManualRecord";
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
    zIndex: 1,
    backgroundColor: constants.colorPrimaryLight,
  },
  slideButton: {
    height: "0.5rem",
    width: "0.5rem",
    color: constants.colorWhiter,
  },
});

const Slider = ({ zoom, handleZoom }) => {
  const cls = useStyles();

  return (
    <>
      <Mui.Paper elevation={4} className={cls.sliderContainer}>
        <FontAwesomeIcon
          icon="chess"
          fixedWidth
          size="xs"
          className={cls.zoomIcon}
        />
        <Mui.IconButton
          className={cls.slideButton}
          onClick={() => handleZoom(1)}
        >
          <CircleIcon />
        </Mui.IconButton>
        <Mui.IconButton
          className={cls.slideButton}
          onClick={() => handleZoom(1.5)}
        >
          <CircleIcon />
        </Mui.IconButton>
        <Mui.IconButton
          className={cls.slideButton}
          onClick={() => handleZoom(2)}
        >
          <CircleIcon />
        </Mui.IconButton>
        <Mui.IconButton
          className={cls.slideButton}
          onClick={() => handleZoom(2.5)}
        >
          <CircleIcon />
        </Mui.IconButton>
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
