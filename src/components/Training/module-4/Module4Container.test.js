import React from "react";
import { renderWithReduxAndRouter as render } from "../../../utils/testHelpers/index";
import ModuleFour from "./Module4Container";
import { NavBar, Module41, Module42, Module43 } from "./Module4Container";

test("Module3Container is rendered", () => {
  render(<ModuleFour />);
});

test("Elements render correctly on load", async () => {
  const { findByDisplayValue } = render(<ModuleFour />);
  findByDisplayValue({ NavBar });
  findByDisplayValue({ Module41 });
  findByDisplayValue({ Module42 });
  findByDisplayValue({ Module43 });
});
