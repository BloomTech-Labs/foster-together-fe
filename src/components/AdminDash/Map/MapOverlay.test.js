import React from "react";
import { renderWithReduxAndRouter as render } from "../../../utils/testHelpers";
import MapOverlay from "./MapOverlay";

test("Mapoverlay renders no issue", async () => {
  render(<MapOverlay />);
});
