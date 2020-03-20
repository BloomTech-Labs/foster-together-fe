import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from '../TrainingNav/NavBar'
import { FiveSteps, BestPractices, MealTips } from './components'

const ModuleTwo = () => {
  const { push } = useHistory()
  const [activeStep, setActiveStep] = useState(0)
  console.log(activeStep)

  const handleNext = e => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (activeStep === 0 || activeStep === 1) {
      setActiveStep(activeStep + 1)
    } else if (activeStep === 2) {
      setActiveStep(0)
    }
  }

  const handleBack = e => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (activeStep === 0) {
      push('/module1')
    } else if (activeStep === 1 || activeStep === 2) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <>
      <NavBar />
      {activeStep === 0 ? (
        <FiveSteps handleNext={handleNext} handleBack={handleBack} />
      ) : activeStep === 1 ? (
        <BestPractices handleNext={handleNext} handleBack={handleBack} />
      ) : activeStep === 2 ? (
        <MealTips handleNext={handleNext} handleBack={handleBack} />
      ) : null}
    </>
  )
}

export default ModuleTwo
