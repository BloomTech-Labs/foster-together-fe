import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Formik, Form as FormikForm } from 'formik'
import NavBar from '../TrainingNav/NavBar'
import Module31 from './components/module3-1'
import Module32 from './components/module3-2'
import Module33 from './components/module3-3'
import Module34 from './components/module3-4'
// /components
const initialValues = {
  m3_q1: '',
  m3_q2: '',
  m3_q3: '',
  m3_q4: '',
  m3_q5: '',
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
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
  let query = useQuery();
  let page = parseInt(query.get('page')) - 1;
  let defaultModule = 0;
  if (page !== null && page < 4) {
    defaultModule = page;
  }

  const [module, setModule] = useState(defaultModule);

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
