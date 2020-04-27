import React from "react";
import ReactDOM from "react-dom";

import { render } from "@testing-library/react";

import Loading from "./Loading.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loading />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders left icon correctly", () => {
  const { getByTestId } = render(<Loading />);
  expect(getByTestId("LeftIcon")).toHaveTextContent("");
});

it("renders right icon correctly", () => {
  const { getByTestId } = render(<Loading />);
  expect(getByTestId("RightIcon")).toHaveTextContent("");
});
