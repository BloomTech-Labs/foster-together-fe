import React, { useState } from "react";
import { LeftSelect, Icon } from "./adminDashStyles";
import { People, Map, DashboardIcon } from "./AdminDashPics/icons";

export default function LeftMenu(props) {
  const [color, setColor] = useState("#A6C9D8");
  const [color2, setColor2] = useState("#A6C9D8");
  const [color3, setColor3] = useState("#A6C9D8");

  return (
    <LeftSelect>
      <img
        src={require("./AdminDashPics/foster.png")}
        style={{ marginLeft: "10px" }}
        width="200px"
        height="auto"
      />
      <Icon style={{cursor:"pointer"}} onMouseEnter={() => {setColor('#396087')}}
      onMouseLeave={() => {setColor("#A6C9D8")}}>
        <DashboardIcon color={color} />
        <p>Dashboard</p>
      </Icon>
      <Icon style={{cursor:"pointer"}} onMouseEnter={() => {setColor2('#396087')}}
      onMouseLeave={() => {setColor2("#A6C9D8")}}>
        <People color={color2} />
        <p>Database</p>
      </Icon>
      <Icon style={{cursor:"pointer"}} onMouseEnter={() => {setColor3('#396087')}}
      onMouseLeave={() => {setColor3("#A6C9D8")}}>
        <Map color={color3} />
        <p>Map</p>
      </Icon>
    </LeftSelect>
  );
}
