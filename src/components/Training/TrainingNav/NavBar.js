import React, { useState } from "react";
import {
  NavBar,
  Logo,
  LogoImg,
  ModuleTitle,
} from "../../AdminDash/Navigation/navStyles";
import { UtilitiesContainer } from "../../AdminDash/Navigation/Navigation";

const TrainingNav = ({ title }) => {
  const [open, setOpen] = useState(false);

  return (
    <NavBar>
      <Logo>
        <LogoImg src={require("../../../images/logo.png")} />
      </Logo>
      <ModuleTitle>{title}</ModuleTitle>
      <UtilitiesContainer open={open} setOpen={setOpen} />
    </NavBar>
  );
};

export default TrainingNav;
