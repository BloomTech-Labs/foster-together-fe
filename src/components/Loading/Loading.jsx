import React from "react";

/* Below is style */
import { LeftIcon, RightIcon, LoaderBackground } from "./Loading.styles";

/* Below is the functions */
export default function Loading() {
  return (
    <>
      <LoaderBackground></LoaderBackground>
      <LeftIcon
        data-testid="LeftIcon"
        src={require("./icons/logo_Left.svg")}
        alt=""
      />
      <RightIcon
        data-testid="RightIcon"
        src={require("./icons/logo_Right.svg")}
        alt=""
      />
    </>
  );
}
