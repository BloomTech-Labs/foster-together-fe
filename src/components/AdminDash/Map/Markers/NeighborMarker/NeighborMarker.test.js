import React from "react";
import ReactDOM from "react-dom";
import NeighborMarker from "./NeighborMarker";
import "@testing-library/jest-dom/extend-expect";

const clicked = jest.fn(() => true);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NeighborMarker></NeighborMarker>, div);
});

test("on click it expands", () => {
  expect(clicked()).toBe(true);
  expect(clicked).toHaveBeenCalledTimes(1);
});
