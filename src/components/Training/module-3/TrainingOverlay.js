import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form as FormikForm } from 'formik'
import NavBar from '../TrainingNav/NavBar'
import Module31 from './module3-1'
import Module32 from './module3-2'
import Module33 from './module3-3'
import Module34 from './module3-4'

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
      return <Module31 {...props} />
    case 1:
      return <Module32 {...props} />
    case 2:
      return <Module33 {...props} />
    case 3:
      return <Module34 {...props} />
    default:
      push('/')
  }
}

function FullOverlay() {
  // Override the default value of 0 if a submodule is passed in via the url query parameters
  // let submodule = 0
  // if (route.query.submodule !== null) {
  //   submodule = route.query.submodule;
  // }

  // const [module, setModule] = useState(submodule)
  const [module, setModule] = useState(0);
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
