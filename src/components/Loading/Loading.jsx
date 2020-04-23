import React from "react";

/* Below is style */
import { Loader, LoaderBackground } from "./Loading.styles";

/* Below is the functions */
export default function Loading() {
  return (
    <LoaderBackground>
      <Loader></Loader>
    </LoaderBackground>
  );
}
