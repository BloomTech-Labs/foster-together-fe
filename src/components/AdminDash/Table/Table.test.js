import React from "react";
import { render } from "@testing-library/react";
import { columns } from "./TableHead";
import Table from "./Table";
import Map from "./DataMap";

test("renders NeighborTable without crashing", () => {
  const neighbors = [];
  const props = {};
  const families = [];
  render(<Table columns={columns} data={neighbors} props={props} />);
});
