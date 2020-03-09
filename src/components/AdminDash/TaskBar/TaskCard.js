import React from "react";
import { Card, CardTop, Number, Description } from "./TaskStyles";
import {
  PaperMagnify,
  Shield,
  PersonCheck,
  HouseMagnify
} from "../AdminDashPics/icons";

const TaskCard = ({ task }) => {
  return (
    <Card>
      <CardTop>
        <Number>{task.number}</Number>
        {task.id === 1 ? (
          <PaperMagnify color="#fff" />
        ) : task.id === 2 ? (
          <Shield color="#fff" />
        ) : task.id === 3 ? (
          <PersonCheck color="#fff" />
        ) : (
          <HouseMagnify color="#fff" />
        )}
      </CardTop>
      <Description>{task.description}</Description>
    </Card>
  );
};

export default TaskCard;
