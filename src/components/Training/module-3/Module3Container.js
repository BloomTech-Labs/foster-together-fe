import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import NavBar from '../TrainingNav/NavBar'
import Module31 from './components/module3-1'
import Module32 from './components/module3-2'
import Module33 from './components/module3-3'
import Module34 from './components/module3-4'

import {
  ModuleThreeSchema1,
  ModuleThreeSchema2,
  ModuleThreeSchema3,
  ModuleThreeSchema4
} from '../../../utils/yupSchemas'

// /components
const initialValues = {
  m3_q1: '',
  m3_q2: '',
  m3_q3: '',
  m3_q4: '',
  m3_q5: '',
}

const ModuleThree = () => {
  const { push } = useHistory();
  let query = useQuery();
  let page = parseInt(query.get('page')) - 1;
  let defaultStep = 0;
  if (page !== null && page < 3) {
    defaultStep = page;
  }

  // page on line 30 may need to be 4

  const [activeStep, setActiveStep] = useState(defaultStep)

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (activeStep === 0 || activeStep === 1 || activeStep === 2 ) {
      setActiveStep(activeStep + 1)
    } else if (activeStep === 3) {
      push('/module4')
    }
  }

  const handleBack = () => {
    if (activeStep === 0) {
      push('/module2')
    } else if (activeStep === 1 || activeStep === 2 || activeStep === 3) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <>
      <NavBar />
      <Formik
        initialValues={initialValues}
        onSubmit={handleNext}
        validationSchema={
          activeStep === 0
            ? ModuleThreeSchema1
            : activeStep === 1
            ? ModuleThreeSchema2
            : activeStep === 2
            ? ModuleThreeSchema3
            : ModuleThreeSchema4
        }

      >
        {props => (
          <Form>
            {activeStep === 0 ? (
              <Module31 handleBack={handleBack} {...props} />
            ) : activeStep === 1 ? (
              <Module32 handleBack={handleBack} {...props} />
            ) : activeStep === 2 ? (
              <Module33 handleBack={handleBack} {...props} />
            ) : activeStep === 3 ? (
              <Module34 handleBack={handleBack} {...props} />
            ) : null}
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ModuleThree