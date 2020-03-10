import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import LocationInfo from './LocationInfo'

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

test('renders LocationInfo without crashing', () => {
  render(<LocationInfo user={user} changeHandler={changeHandler} />)
})
