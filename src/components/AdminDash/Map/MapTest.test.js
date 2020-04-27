import React from "react";
import { renderWithReduxAndRouter as render } from "../../../utils/testHelpers";
import Map from "./MapOverlay";
import FilterDiv from "./MapFilters";
import PersonInfo from "./PersonInfo";

// Map renders properly
test("Map renders no issue", async () => {
  render(<Map />);
});

// Markers render properly on Map
test("Markers display correctly", async () => {
  const { findByDisplayValue } = render(<Map />);
  findByDisplayValue(location);
});

// Filter Bar Test
test("Filter Bar renders properly", async () => {
  const { findByDisplayValue } = render(<Map />);
  findByDisplayValue(FilterDiv);
});

// Users Info Test
test("PersonInfo render properly", async () => {
  const { findByDisplayValue } = render(<Map />);
  findByDisplayValue(PersonInfo);
});
