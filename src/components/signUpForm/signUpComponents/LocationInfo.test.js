import React from 'react'
import { Formik } from 'formik'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import LocationInfo from './LocationInfo'

test('renders LocationInfo without crashing', () => {
  render(
    <Formik
      initialValues={{
        address: '',
        city: '',
        zip: '',
        state: '',
      }}
    >
      {props => (
        <form>
          <LocationInfo {...props} />
        </form>
      )}
    </Formik>
  )
})
