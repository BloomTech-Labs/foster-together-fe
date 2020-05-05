import React from "react";
import { renderWithReduxAndRouter as render } from "../../../../utils/testHelpers/index";
import Module11 from "./module1-1";

import "@testing-library/jest-dom/extend-expect";

it("module1-1 Renders", async () => {
  render(<Module11 />);
});
