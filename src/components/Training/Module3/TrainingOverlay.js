import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form as FormikForm } from 'formik'
import NavBar from '../TrainingNav/NavBar'
import TrainingThreeOne from './Training3.1'
import TrainingThreeTwo from './Train3.2'
import TrainingThreeThree from './Train3.3'
import TrainingThreeFour from './Train3.4'

const initialValues = {
  m3_q1: '',
  m3_q2: '',
  m3_q3: '',
  m3_q4: '',
  m3_q5: '',
}

function Overlay(props) {
  const { push } = useHistory()
  switch (props.module) {
    case 0:
      return <TrainingThreeOne {...props} />
    case 1:
      return <TrainingThreeTwo {...props} />
    case 2:
      return <TrainingThreeThree {...props} />
    case 3:
      return <TrainingThreeFour {...props} />
    default:
      push('/')
  }
}

function FullOverlay() {
  const [module, setModule] = useState(0)
  return (
    <>
      <NavBar />
      <Formik initialValues={initialValues}>
        {props => (
          <FormikForm>
            <Overlay module={module} setModule={setModule} {...props} />
          </FormikForm>
        )}
      </Formik>
    </>
  )
}
export default FullOverlay
