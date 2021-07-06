import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Chessboard, { Tile } from "./Chessboard";
import Piece from "../piece/Piece";
import * as constants from "../../utils/constants";

configure({ adapter: new Adapter() });
describe("Chessboard component test", () => {
  it("Should have 64 tiles", () => {
    const wrapper = shallow(<Chessboard zoom={1} />);
    expect(wrapper.find(Tile).length).toBe(64);
  });

  it("Should have 32 pieces", () => {
    const wrapper = shallow(<Chessboard zoom={1} />);
    expect(wrapper.find(Piece).length).toBe(32);
  });

  it("Should have 16 white pieces", () => {
    const wrapper = shallow(<Chessboard zoom={1} />);
    expect(wrapper.find({ color: constants.colorWhiter }).length).toBe(16);
  });
  //TODO: add Piece as selector
  it("Should have 16 black pieces", () => {
    const wrapper = shallow(<Chessboard zoom={1} />);
    expect(wrapper.find({ color: constants.colorBlacker }).length).toBe(16);
  });

  it("Should have same number of pieces than", () => {
    const wrapper = shallow(<Chessboard zoom={1} />);
    expect(wrapper.find({ color: constants.colorBlacker }).length).toBe(16);
  });
});
