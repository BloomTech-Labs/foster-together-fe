import React from "react";
import { renderWithReduxAndRouter as render } from "../../../utils/testHelpers/index";
import ModuleStart from "./trainingLetter";
import ModuleStart2 from "./trainingLetter2";
import "@testing-library/jest-dom/extend-expect";

import {
  MainContent,
  img,
  LetterContext,
  Circle,
  Letter,
  onClick
} from "../TrainStyles";
import TrainingNav from "../TrainingNav/NavBar";

test("ModuleStart", async () => {
  render(<ModuleStart />);
});

test("text is rendered", () => {
  const { findByDisplayValue } = render(<ModuleStart />);
  findByDisplayValue(<MainContent />, <TrainingNav />, <Letter />);
  findByDisplayValue({ img });
});

test("trainingLetter2 Letter Renders", async () => {
  render(<ModuleStart2 />);
});

test("Testing onClick", async () => {});
