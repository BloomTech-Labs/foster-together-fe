import React from "react";
import { Menu, LogOut, Display } from "../Navigation/navStyles";

const Container = () => {
  return (
    <Menu>
      <Display>
        <LogOut
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Log Out
        </LogOut>
      </Display>
    </Menu>
  );
};

export default Container;
