import React from 'react'
import { FlexContainer } from '../../../GlobalStyles'
import {
  Stepper,
  Step,
  StepLabel,
  StepTitle,
  StepConnector,
} from '../styles/signUpOverlayStyles'

const StepperComponent = ({ steps, activeStep }) => {
  return (
    <Stepper justify='center' align='center'>
      {steps.map((step, index) => {
        // returns true or false and determines the color of the step
        const active = activeStep >= index
        return (
          <FlexContainer justify='center' align='center' key={step}>
            {index > 0 && <StepConnector active={active} />}
            <StepLabel active={active}>{index + 1}</StepLabel>
            <StepTitle active={active}>{step}</StepTitle>
          </FlexContainer>
        )
      })}
    </Stepper>
  )
}

export default StepperComponent
