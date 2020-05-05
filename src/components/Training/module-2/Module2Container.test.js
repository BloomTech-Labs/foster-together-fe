import React from "react";
import { renderWithReduxAndRouter as render } from "../../../utils/testHelpers/index";
import Module2Container from "./Module2Container";
import { NavBar, Formik, Form } from "./Module2Container";

test("Module2Container is rendered", () => {
  render(<Module2Container />);
});

test("Elements render correctly on load", async () => {
  const { findByDisplayValue } = render(<Module2Container />);
  findByDisplayValue({ NavBar });
  findByDisplayValue({ Formik });
  findByDisplayValue({ Form });
});
