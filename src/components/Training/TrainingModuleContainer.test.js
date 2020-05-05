import React from "react";
import ReactDOM from "react-dom";
import { renderWithReduxAndRouter as render } from "../../utils/testHelpers/index";
import TrainingModuleContainer from "./TrainingModuleContainer";
import { div, img, p } from "./TrainingModuleContainer";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TrainingModuleContainer></TrainingModuleContainer>, div);
});

describe("renders elements correctly on the screen", () => {
  it("renders elements correctly", () => {
    const { findByDisplayValue } = render(<TrainingModuleContainer />);
    findByDisplayValue({ div });
    findByDisplayValue({ img });
    findByDisplayValue({ p });
  });
});
