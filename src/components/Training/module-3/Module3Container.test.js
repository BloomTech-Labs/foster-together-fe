import React from "react";
import { renderWithReduxAndRouter as render } from "../../../utils/testHelpers/index";
import Module3Container from "./Module3Container";
import { NavBar, Formik, Form } from "./Module3Container";

test("Module3Container is rendered", () => {
  render(<Module3Container />);
});

test("Elements render correctly on load", async () => {
  const { findByDisplayValue } = render(<Module3Container />);
  findByDisplayValue({ NavBar });
  findByDisplayValue({ Formik });
  findByDisplayValue({ Form });
});
