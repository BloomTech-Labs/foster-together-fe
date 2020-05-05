import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../../utils/testHelpers'
import { Formik, Form } from 'formik'
import ModuleTwo from '../'
import { Module22 } from './Module22'
import { Checkbox, FormGroup, CheckLabel } from '../../TrainStyles'
import { Module23, Survey } from './module2-3'
import { fireEvent } from '@testing-library/react'

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

test('ModuleTwo is rendered', async () => {
  render(<ModuleTwo />)
})

test('Best Practices is rendered', async () => {
  render(
    <Formik initialValues={initialValues}>
      {props => (
        <Form>
          <Module22 {...props} />
        </Form>
      )}
    </Formik>
  )
})

test('Radio button', () => {
  render(
    <Formik initialValues={initialValues}>
      {props => (
        <Form>
          <Module23 {...props} />
        </Form>
      )}
    </Formik>
  )
})

test('renders button correctly', () => {
  const { getByText, findByText } = render(<CheckLabel></CheckLabel>)
})
