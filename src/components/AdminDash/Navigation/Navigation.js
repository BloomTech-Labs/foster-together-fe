import React, { useState, useEffect } from "react";
import { LeftSelect, Icon } from "./adminDashStyles";
import { People, Map, DashboardIcon } from "./AdminDashPics/icons";

export default function LeftMenu(props) {
  const inactive = "#396087";
  const active = "#A6C9D8";
  const [color, setColor] = useState(active);
  const [color2, setColor2] = useState(active);
  const [color3, setColor3] = useState(active);
  useEffect(() => {
    if (props.routing.history.location.pathname == "/dash") {
      setColor(inactive);
    }
  }, [color]);

  return (
    <LeftSelect>
      <img
        src={require("./AdminDashPics/foster.png")}
        style={{ marginLeft: "10px" }}
        width="200px"
        height="auto"
      />
      <Icon
        style={{ cursor: "pointer" }}
        onMouseEnter={() => {
          setColor(inactive);
        }}
        onMouseLeave={() => {
          setColor(active);
        }}
      >
        <DashboardIcon color={color} />
        <p>Dashboard</p>
      </Icon>
      <Icon
        style={{ cursor: "pointer" }}
        onMouseEnter={() => {
          setColor2(inactive);
        }}
        onMouseLeave={() => {
          setColor2(active);
        }}
      >
        <People color={color2} />
        <p>Database</p>
      </Icon>
      <Icon
        style={{ cursor: "pointer" }}
        onMouseEnter={() => {
          setColor3(inactive);
        }}
        onMouseLeave={() => {
          setColor3(active);
        }}
      >
        <Map color={color3} />
        <p>Map</p>
      </Icon>
    </LeftSelect>
  );
}
