import React from 'react'
import { Stepper, Step, StepWrapper, StepLabel } from './profileStyles'

const StepperComponent = () => {
  return (
    <Stepper>
      <Step>
        <StepWrapper>
          <StepLabel active>1</StepLabel>
          <p>Application</p>
        </StepWrapper>
      </Step>
      <Step>
        <StepWrapper>
          <StepLabel active>2</StepLabel>
          <p>Background Check</p>
        </StepWrapper>
      </Step>
      <Step>
        <StepWrapper>
          <StepLabel>3</StepLabel>
          <p>Training</p>
        </StepWrapper>
      </Step>
      <Step>
        <StepWrapper>
          <StepLabel>4</StepLabel>
          <p>Match</p>
        </StepWrapper>
      </Step>
    </Stepper>
  )
}

export default StepperComponent
