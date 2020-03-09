import React from "react";
import { render } from "@testing-library/react";
import { columns } from "./TableHead";
import Table from "./Table";

test("renders NeighborTable without crashing", () => {
  const neighbors = [];
  const props = {};
  render(<Table columns={columns} data={neighbors} props={props} />);
});
