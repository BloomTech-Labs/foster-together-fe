import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import NavBar from '../TrainingNav/NavBar'
import Module41 from './components/module4-1'
import Module42 from './components/module4-2'
import Module43 from './components/module4-3'
import Module44 from './components/module4-4'
import {
  ModuleFourSchema1,
  ModuleFourSchema2,
  ModuleFourSchema3,
  ModuleFourSchema4,
} from '../../../utils/yupSchemas'

// 11 total m4 qs
const initialValues = {
  m4_q1: '',
  m4_q2: '',
  m4_q3: '',
  m4_q4: '',
  m4_q5: '',
  m4_q6: '',
  m4_q7: '',
  m4_q8: '',
  m4_q9: '',
  m4_q10: '',
  m4_q11: '',
}

const ModuleFour = () => {
  const { push } = useHistory()
  let query = useQuery();
  let page = parseInt(query.get('page')) - 1;
  let defaultStep = 0;
  if (page !== null && page < 4) {
    defaultStep = page;
  }
// page on line 36 may need to be 3

  const [activeStep, setActiveStep] = useState(defaultStep);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (activeStep === 0 || activeStep === 1 || activeStep === 2 ) {
      setActiveStep(activeStep + 1)
    } else if (activeStep === 3) {
      push('/module5')
    }
  }

  const handleBack = () => {
    if (activeStep === 0) {
      push('/module3')
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
            ? ModuleFourSchema1
            : activeStep === 1
            ? ModuleFourSchema2
            : activeStep === 2
            ? ModuleFourSchema3
            : ModuleFourSchema4
        }
      >
        {props => (
          <Form>
            {activeStep === 0 ? (
              <Module41 handleBack={handleBack} {...props} />
            ) : activeStep === 1 ? (
              <Module42 handleBack={handleBack} {...props} />
            ) : activeStep === 2 ? (
              <Module43 handleBack={handleBack} {...props} />
            ) : activeStep === 3 ? (
              <Module44 handleBack={handleBack} {...props} />
            ) : null}
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ModuleFour
