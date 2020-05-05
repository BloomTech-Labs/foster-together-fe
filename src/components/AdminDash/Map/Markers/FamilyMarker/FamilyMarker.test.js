import React from "react";
import ReactDOM from "react-dom";
import FamilyMarker from "./FamilyMarker";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FamilyMarker></FamilyMarker>, div);
});
