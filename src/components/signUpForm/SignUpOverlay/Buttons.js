import React from 'react'
import { BtnContainer, BackBtn, NextBtn } from '../styles/signUpOverlayStyles'

const Buttons = ({ steps, activeStep, setActiveStep }) => {
  return (
    <BtnContainer>
      {activeStep !== 0 && (
        <BackBtn type='button' onClick={() => setActiveStep(activeStep - 1)}>
          Back
        </BackBtn>
      )}
      <NextBtn type='submit'>
        {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
      </NextBtn>
    </BtnContainer>
  )
}

export default Buttons
