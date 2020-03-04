import React from "react";
import { Card, CardTop, Number, Icon, Description } from "./TaskStyles";

const TaskCard = ({ task }) => {
  return (
    <Card>
      <CardTop>
        <Number>{task.number}</Number>
        <Icon>{task.icon}</Icon>
      </CardTop>
      <Description>{task.description}</Description>
    </Card>
  );
};

export default TaskCard;
