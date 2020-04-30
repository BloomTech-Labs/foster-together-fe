import React from "react";
import ReactDOM from "react-dom";
import NeighborMarker from "./NeighborMarker";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NeighborMarker></NeighborMarker>, div);
});
