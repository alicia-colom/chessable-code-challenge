import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import each from "jest-each";

import Chessboard from "./Chessboard";
import { Tile } from "./Chessboard.styles";
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

  it("Should have 16 black pieces", () => {
    const wrapper = shallow(<Chessboard zoom={1} />);
    expect(wrapper.find({ color: constants.colorBlacker }).length).toBe(16);
  });

  // FIXME: Test with jest-each library is not supported by Codesandbox:
  // each([
  //   ["knight", 4],
  //   ["rook", 4],
  //   ["bishop", 4],
  //   ["pawn", 16],
  //   ["queen", 2],
  //   ["king", 2],
  // ]).it("Should have '%s' '%d' pieces", (text, expected) => {
  //   const wrapper = shallow(<Chessboard zoom={1} />);
  //   expect(wrapper.find({ icon: text }).length).toBe(expected);
  // });
});
