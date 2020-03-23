import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import NavBar from '../TrainingNav/NavBar'
import { FiveSteps, BestPractices, MealTips } from './components'

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
    if (activeStep === 0) {
      push('/module1')
    } else if (activeStep === 1 || activeStep === 2) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <>
      <NavBar />
      <Formik initialValues={initialValues} onSubmit={() => push('#')}>
        {props => (
          <Form>
            {activeStep === 0 ? (
              <FiveSteps handleNext={handleNext} handleBack={handleBack} />
            ) : activeStep === 1 ? (
              <BestPractices handleNext={handleNext} handleBack={handleBack} />
            ) : activeStep === 2 ? (
              <MealTips
                handleNext={handleNext}
                handleBack={handleBack}
                values={props.values}
                setFieldValue={props.setFieldValue}
              />
            ) : null}
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ModuleTwo
