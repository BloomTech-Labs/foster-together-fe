import React from "react";
import { renderWithReduxAndRouter as render } from "../../../../utils/testHelpers";
import { Module41 } from "./module4-1";
import { Module42 } from "./module4-2";
import { Module43 } from "./module4-3";
import { Module44 } from "./module4-4";
import ModuleFour from "../Module4Container";

test("Module four one", () => {
  render(<Module41 />);
});

test("Module four two", () => {
  render(<Module42 />);
});

test("Module four three", () => {
  render(<Module43 />);
});

test("Module four four", () => {
  render(<Module44 />);
});

test("Module four displayed", () => {
  render(<ModuleFour />);
});
