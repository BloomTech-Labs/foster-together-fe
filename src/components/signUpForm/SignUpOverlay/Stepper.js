import React from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  StepTitle,
  StepConnector,
} from '../styles/signUpOverlayStyles'

const StepperComponent = ({ steps, activeStep }) => {
  return (
    <Stepper>
      {steps.map((step, index) => {
        // returns true or false and determines the color of the step
        const active = activeStep >= index
        return (
          <Step key={step}>
            {index > 0 && <StepConnector active={active} />}
            <StepLabel active={active}>{index + 1}</StepLabel>
            <StepTitle active={active}>{step}</StepTitle>
          </Step>
        )
      })}
    </Stepper>
  )
}

export default StepperComponent
