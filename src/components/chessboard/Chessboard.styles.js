import styled from "styled-components";
import * as constants from "../../utils/constants";

export const Tile = styled.div`
  background-color: ${(props) =>
    (props.x + props.y) % 2 === 0
      ? constants.colorBoardLight
      : constants.colorBoardDark};
  display: flex;
  align-items: center;
`;

export const Board = styled.div`
  height: ${(props) => props.zoom * 15.5}rem;
  width: ${(props) => props.zoom * 15.5}rem;
  margin-top: clamp(3.8rem, 4rem + 1.2vw, 5.5rem);
  padding: 0.05rem;
  align-self: center;
  align-content: center;
  justify-content: center;
  display: grid;
  gap: 0;
  grid-template-columns: repeat(8, ${(props) => props.zoom * 1.875}rem);
  grid-template-rows: repeat(8, ${(props) => props.zoom * 1.875}rem);
  background-color: ${constants.colorSecondary};
  border-radius: 5px;
  font-size: 0.75rem;
  color: ${constants.colorFontMain};
`;
