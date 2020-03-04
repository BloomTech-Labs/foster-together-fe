import React, { useState } from "react";
import { People } from "../AdminDashPics/icons";
import { Wrapper, Title, Container } from "./TaskStyles";

import TaskCard from "./TaskCard";

const TaskBar = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Volunteer applications to review.",
      number: 12,
      icon: People
    },
    {
      id: 2,
      description: "Background checks awaiting confirmation",
      number: 23,
      icon: People
    },
    {
      id: 3,
      description: "Volunteers ready to match",
      number: 6,
      icon: People
    },
    {
      id: 4,
      description: "Families needing to be matched to a neighbor",
      number: 2,
      icon: People
    }
  ]);
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
