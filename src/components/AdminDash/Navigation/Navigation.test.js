import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

test("renders navigation without crashing", () => {
  render(<Navigation />);
});
