import React from 'react'
import { Module2Step } from '../../TrainStyles'

export const SimpleStep = ({ title, text }) => {
  return (
    <Module2Step>
      <h3>{title}</h3>
      <p>{text}</p>
    </Module2Step>
  )
}
