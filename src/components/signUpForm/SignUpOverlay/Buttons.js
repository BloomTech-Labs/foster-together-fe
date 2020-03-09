import React from 'react'
import { BtnContainer, BackBtn, NextBtn } from '../styles/signUpOverlayStyles'

const Buttons = ({ steps, activeStep, handleBack, handleNext }) => {
  return (
    <BtnContainer>
      {activeStep !== 0 && <BackBtn onClick={handleBack}>Back</BackBtn>}
      <NextBtn onClick={handleNext}>
        {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
      </NextBtn>
    </BtnContainer>
  )
}

export default Buttons
