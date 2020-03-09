import React from "react";
import { render } from "@testing-library/react";
import DataMap from "./DataMap";

const data = {Data: [{first_name: "bob", last_name: "smith"},{}], Data2: [{}, {}]}

test("length is four", () => {
    const expected = 4
    const actual = DataMap(data).length;
    expect(expected).toEqual(actual);
})

test ("test that name is coming through correctly", () => {
    const expected = "bob, smith"
    console.log(DataMap(data)[0])
    const actual = DataMap(data)[0].name;
    expect(expected).toEqual(actual)
})

test ("test that match is coming through as none", () => {
    const expected = "none"
    const actual = DataMap(data)[0].match;
    expect(expected).toEqual(actual)
})
