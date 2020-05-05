import React from "react";
import { renderWithReduxAndRouter as render } from "../../../../utils/testHelpers";
import ModuleFive from "./module5-1";

test("ModuleFive renders", () => {
  render(<ModuleFive />);
});
