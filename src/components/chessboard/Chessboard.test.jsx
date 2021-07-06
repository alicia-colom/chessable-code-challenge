import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Chessboard, { Tile } from "./Chessboard";

configure({ adapter: new Adapter() });
describe("Chessboard component test", () => {
  it("Should have 64 tiles", () => {
    const wrapper = shallow(<Chessboard zoom={1} />);

    expect(wrapper.find(Tile).length).toBe(64);
  });
});
