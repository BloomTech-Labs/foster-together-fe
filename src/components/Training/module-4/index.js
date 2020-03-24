import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from '../TrainingNav/NavBar'
import { Module41, Module42, Module43, Module44 } from './components'

const ModuleFour = () => {
  const { push } = useHistory()
  const [activeStep, setActiveStep] = useState(0)

  const handleBack = e => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (activeStep === 0) {
      push('/module3')
    } else if (activeStep === 1 || activeStep === 2 || activeStep === 3) {
      setActiveStep(activeStep - 1)
    }
  }

  const handleNext = e => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (activeStep === 0 || activeStep === 1 || activeStep === 2) {
      setActiveStep(activeStep + 1)
    } else if (activeStep === 3) {
      setActiveStep(0)
    }
  }

  return (
    <>
      <NavBar />
      {activeStep === 0 ? (
        <Module41 handleNext={handleNext} handleBack={handleBack} />
      ) : activeStep === 1 ? (
        <Module42 handleNext={handleNext} handleBack={handleBack} />
      ) : activeStep === 2 ? (
        <Module43 handleNext={handleNext} handleBack={handleBack} />
      ) : activeStep === 3 ? (
        <Module44 handleNext={handleNext} handleBack={handleBack} />
      ) : null}
    </>
  )
}

export default ModuleFour
