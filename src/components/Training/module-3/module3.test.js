import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import FullOverlay from './TrainingOverlay'
import TrainingThreeFour from './Train3.4'
import { Formik, Form } from 'formik'
import TrainingThreethree from './Train3.3'
import TrainingThreeTwo from './Train3.2'
import TrainingThreeOne from './Training3.1'
import { Submit } from './TrainStyle'

const initialValues = {
  m3_q1: '',
  m3_q2: '',
  m3_q3: '',
  m3_q4: '',
  m3_q5: '',
}
test('Module 3 render', async () => {
  render(<FullOverlay />)
})

test('Module 3.4 renders', () => {
  render(
    <Formik initialValues={initialValues}>
      {props => (
        <Form>
          <TrainingThreeFour {...props} />
        </Form>
      )}
    </Formik>
  )
})

test('Module 3.3 render', () => {
  render(
    <Formik initialValues={initialValues}>
      {props => (
        <Form>
          <TrainingThreethree {...props} />
        </Form>
      )}
    </Formik>
  )
})

test('Module 3.2 render', () => {
  render(
    <Formik initialValues={initialValues}>
      {props => (
        <Form>
          <TrainingThreeTwo {...props} />
        </Form>
      )}
    </Formik>
  )
})

test('Module 3.1 render', () => {
  render(
    <Formik initialValues={initialValues}>
      {props => (
        <Form>
          <TrainingThreeOne {...props} />
        </Form>
      )}
    </Formik>
  )
})
