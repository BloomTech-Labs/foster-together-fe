import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import Application from './Application'
import AppForm from './ApplicationForm'
import { Formik, Form } from 'formik'
import { PrivateRoute } from '../../../utils/customRoutes'
import StepperComponent from '../../Training/TrainingStepper'

const initialValues = {
  app_q1_a: {
    option_1: false,
    option_2: false,
    option_3: false,
    option_4: false, // checkboxes
  },
  app_q1_b: '', // optional referral name
  app_q2: {
    option_1: false,
    option_2: false,
    option_3: false,
    option_4: false,
    option_5: false, // checkboxes
  },
  app_q3: false, // yes or no
  app_q4: 0, // 1-3, yes/no/maybe
  app_q5: '', // experience with kids
  app_q6_a: false, // yes or no
  app_q6_b: {
    answer_a: '',
    answer_b: '',
    answer_c: '', // list of certications/licenses
  },
}

test('renders application', () => {
  render(<Application />)
})

test('App form displayed', () => {
  render(
    <Formik initialValues={initialValues}>
      {props => (
        <Form>
          <AppForm {...props} />
        </Form>
      )}
    </Formik>
  )
})

test('PrivateRoutes being used', () => {
  render(<PrivateRoute />)
})

test('Stepper Component', () => {
  render(<StepperComponent />)
})
