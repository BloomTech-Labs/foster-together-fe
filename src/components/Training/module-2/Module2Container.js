import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import NavBar from '../TrainingNav/NavBar'
import { Module21, Module22, Module23 } from './components/'
import {
  ModuleTwoSchema1,
  ModuleTwoSchema2,
  ModuleTwoSchema3,
} from '../../../utils/yupSchemas'

const initialValues = {
  m2_q1: '',
  m2_q2: '',
  m2_q3: 0,
  m2_q4: false,
  // m2_q5
  answer_a1: false,
  answer_a2: false,
  answer_a3: false,
  answer_a4: false,
  answer_a5: false,
  answer_a6: false,
  answer_a7: false,
  answer_a8: false,
  answer_a9: false,
  answer_b: '',
  m2_q6: false,
  m2_q7: false,
  m2_q8: '',
}

const ModuleTwo = () => {
  const { push } = useHistory()
  let query = useQuery();
  let page = parseInt(query.get('page')) - 1;
  let defaultStep = 0;
  if (page !== null && page < 3) {
    defaultStep = page;
  }

  const [activeStep, setActiveStep] = useState(defaultStep)

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (activeStep === 0 || activeStep === 1) {
      setActiveStep(activeStep + 1)
    } else if (activeStep === 2) {
      push('/module3')
    }
  }

  const handleBack = () => {
    if (activeStep === 0) {
      push('/module1')
    } else if (activeStep === 1 || activeStep === 2) {
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
            ? ModuleTwoSchema1
            : activeStep === 1
            ? ModuleTwoSchema2
            : ModuleTwoSchema3
        }
      >
        {props => (
          <Form>
            {activeStep === 0 ? (
              <Module21 handleBack={handleBack} {...props} />
            ) : activeStep === 1 ? (
              <Module22 handleBack={handleBack} {...props} />
            ) : activeStep === 2 ? (
              <Module23 handleBack={handleBack} {...props} />
            ) : null}
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ModuleTwo
