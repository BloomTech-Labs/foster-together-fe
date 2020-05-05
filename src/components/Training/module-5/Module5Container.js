// import React from 'react'

// export default function Module5() {
//     return (
//         <div>
            
//         </div>
//     )
// }
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import NavBar from '../TrainingNav/NavBar'
import { ModuleFive } from './components'

const Module5 = () => {
  const { push } = useHistory()
  let query = useQuery();
  let page = parseInt(query.get('page')) - 1;
  let defaultStep = 0;
  if (page !== null && page < 4) {
    defaultStep = page;
  }
  const [activeStep, setActiveStep] = useState(defaultStep);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

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
        <ModuleFive handleNext={handleNext} handleBack={handleBack} />
      ) : activeStep === 1 ? (
        <ModuleFive handleNext={handleNext} handleBack={handleBack} />
      ) : null}
    </>
  )
}

export default Module5

