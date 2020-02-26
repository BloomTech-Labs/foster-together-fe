import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/renderWithReduxAndRouter'
import ContactInfo from './ContactInfo'

const user = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  zip: '',
  state: '',
  country: '',
  preferredContact: '',
}

const changeHandler = e => {
  console.log(user)
}

test('renders ContactInfo without crashing', () => {
  render(<ContactInfo user={user} changeHandler={changeHandler} />)
})
