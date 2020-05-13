import React from "react";
import { Wrapper, Title, Container } from "./taskStyles";
import { houseMagnify, paperMagnify, personCheck, shield } from "./icons";

import TaskCard from "./TaskCard";

const TaskBar = props => {
  const numApplications = props.numApplications;

  const numBackgroundCheck = props.members.length;

  const numVolunteers = props.numVolunteers;

  const familiesToMatch = props.familiesToMatch;

  console.log("Props here", props.members);

  const tasks = [
    {
      id: 1,
      description: "Applications to review.",
      image: paperMagnify,
      alt: "Icon of a sheet of paper with a magnifying glass",
      number: numApplications.length
    },
    {
      id: 2,
      description: "Background checks awaiting confirmation",
      image: shield,
      alt: "Icon of a shield with a check mark",
      number: numBackgroundCheck
    },
    {
      id: 3,
      description: "Volunteers ready to match",
      image: personCheck,
      alt: "Icon of a person with a check mark",
      number: numVolunteers.length
    },
    {
      id: 4,
      description: "Families needing to be matched to a neighbor",
      image: houseMagnify,
      alt: "Icon of a house with a magnifying glass",
      number: familiesToMatch.length
    }
  ];
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
