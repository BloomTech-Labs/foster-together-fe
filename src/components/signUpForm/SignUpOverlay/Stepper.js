import React from 'react'
import { FlexCenter } from '../../../GlobalStyles'
import {
  Stepper,
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
          <FlexCenter key={step}>
            {index > 0 && <StepConnector active={active} />}
            <StepLabel active={active}>{index + 1}</StepLabel>
            <StepTitle active={active}>{step}</StepTitle>
          </FlexCenter>
        )
      })}
    </Stepper>
  )
}

export default StepperComponent
