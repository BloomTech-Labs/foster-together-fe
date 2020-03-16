import React from 'react'
import { Wrapper, Title, Container } from './taskStyles'
import { houseMagnify, paperMagnify, personCheck, shield } from './icons'

import TaskCard from './TaskCard'

const TaskBar = () => {
  const tasks = [
    {
      id: 1,
      description: 'Applications to review.',
      image: paperMagnify,
      alt: 'Icon of a sheet of paper with a magnifying glass',
      number: 12,
    },
    {
      id: 2,
      description: 'Background checks awaiting confirmation',
      image: shield,
      alt: 'Icon of a shield with a check mark',
      number: 23,
    },
    {
      id: 3,
      description: 'Volunteers ready to match',
      image: personCheck,
      alt: 'Icon of a person with a check mark',
      number: 6,
    },
    {
      id: 4,
      description: 'Families needing to be matched to a neighbor',
      image: houseMagnify,
      alt: 'Icon of a house with a magnifying glass',
      number: 2,
    },
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
  )
}

export default TaskBar
