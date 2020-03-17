import React from 'react'
import { Stepper, Step, StepWrapper, StepLabel, Arrow } from './profileStyles'
import {
  application,
  bgc,
  match,
  training,
  stepper,
  stepper_last,
  stepper_arrow,
} from './icons'

const StepperComponent = () => {
  return (
    <Stepper>
      <Step>
        <StepWrapper>
          <Arrow src={stepper} />
          <StepLabel active>
            <img src={application} />
          </StepLabel>
          <p>Application</p>
        </StepWrapper>
      </Step>
      <Step>
        <StepWrapper>
          <img src={stepper_arrow} />
          <StepLabel active></StepLabel>
          <p>Training</p>
        </StepWrapper>
      </Step>
      <Step>
        <StepWrapper>
          <StepLabel active>
            <img src={bgc} />
          </StepLabel>
          <p>Background Check</p>
        </StepWrapper>
      </Step>
      <Step>
        <StepWrapper>
          <StepLabel>
            {' '}
            <img src={match} />
          </StepLabel>
          <p>Match</p>
        </StepWrapper>
      </Step>
    </Stepper>
  )
}

export default StepperComponent
