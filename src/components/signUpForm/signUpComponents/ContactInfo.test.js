import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import ContactInfo from './ContactInfo'

const values = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  address: '',
  password: '',
  passwordConfirm: '',
}

const handleChange = e => {
  console.log(values)
}

test('renders ContactInfo without crashing', () => {
  render(<ContactInfo values={values} handleChange={handleChange} />)
})
