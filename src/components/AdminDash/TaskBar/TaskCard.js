import React from 'react'
import { Card, CardTop, Number, Description } from './TaskStyles'
import { PaperMagnify, Shield, PersonCheck, HouseMagnify } from './taskIcons'

const TaskCard = ({ task }) => {
  return (
    <Card>
      <CardTop>
        <Number>{task.number}</Number>
        {task.id === 1 ? (
          <PaperMagnify />
        ) : task.id === 2 ? (
          <Shield />
        ) : task.id === 3 ? (
          <PersonCheck />
        ) : (
          <HouseMagnify />
        )}
      </CardTop>
      <Description>{task.description}</Description>
    </Card>
  )
}

export default TaskCard
