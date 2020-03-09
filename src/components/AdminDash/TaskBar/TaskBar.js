import React from "react";
import { Wrapper, Title, Container } from "./TaskStyles";

import TaskCard from "./TaskCard";

const TaskBar = () => {
  const tasks = [
    {
      id: 1,
      description: "Volunteer applications to review.",
      number: 12
    },
    {
      id: 2,
      description: "Background checks awaiting confirmation",
      number: 23
    },
    {
      id: 3,
      description: "Volunteers ready to match",
      number: 6
    },
    {
      id: 4,
      description: "Families needing to be matched to a neighbor",
      number: 2
    }
  ]
  return (
    <Wrapper>
      <Title>Tasks</Title>
      <Container>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default TaskBar;
