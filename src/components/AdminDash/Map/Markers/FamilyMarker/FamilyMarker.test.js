import React from "react";
import ReactDOM from "react-dom";
import FamilyMarker from "./FamilyMarker";
import "@testing-library/jest-dom/extend-expect";

const clicked = jest.fn(() => true);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FamilyMarker></FamilyMarker>, div);
});

test("on click it expands", () => {
  expect(clicked()).toBe(true);
  expect(clicked).toHaveBeenCalledTimes(1);
});
