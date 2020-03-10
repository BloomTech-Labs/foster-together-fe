import React from 'react'
import { Formik } from 'formik'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import ContactInfo from './ContactInfo'

test('renders ContactInfo without crashing', () => {
  render(
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
    >
      {props => (
        <form>
          <ContactInfo {...props} />
        </form>
      )}
    </Formik>
  )
})
