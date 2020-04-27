import React from "react";
import { renderWithReduxAndRouter as render } from "../../../utils/testHelpers";
import MapFilter from "./MapFilters";

// Map renders properly
test("MapFilter renders no issue", async () => {
  render(<MapFilter />);
});
