import React from 'react'
import { Card, CardTop, Number, Description } from './taskStyles'

const TaskCard = ({ task }) => {
  return (
    <Card>
      <CardTop>
        <Number>{task.number}</Number>
        <img src={task.image} alt={task.alt} />
      </CardTop>
      <Description>{task.description}</Description>
    </Card>
  )
}

export default TaskCard
