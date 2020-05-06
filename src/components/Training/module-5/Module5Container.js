import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import NavBar from '../TrainingNav/NavBar'
import Module5 from './components/module5'

import { ModuleFiveSchema1 } from '../../../utils/yupSchemas'

const initialValues = {
  m5_q1: '',
  m5_q2: '',
  m5_q3: '',
}

const ModuleFive = () => {
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

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    push('/userProfile')
    // if (activeStep === 0) {
    //   setActiveStep(activeStep + 1)
    // } else if (activeStep === 1) {
    //   push('/userProfile')
    // }
  }

  const handleBack = () => {
    if (activeStep === 0) {
      push('/module4')
    } else if (activeStep === 1) {
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
            ? ModuleFiveSchema1
            : null
        }
      >
        {props => (
          <Form>
            {activeStep === 0 ? (
          <Module5 handleBack={handleBack} {...props} />
        ) : activeStep === 1 ? (
          <Module5 handleBack={handleBack} {...props} />
        ) : null}
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ModuleFive

