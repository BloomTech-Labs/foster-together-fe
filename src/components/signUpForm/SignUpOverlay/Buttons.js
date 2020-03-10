import React from 'react'
import { BtnContainer, BackBtn, NextBtn } from '../styles/signUpOverlayStyles'

const Buttons = ({ steps, activeStep, handleBack }) => {
  return (
    <BtnContainer>
      {activeStep !== 0 && (
        <BackBtn type='button' onClick={handleBack}>
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
