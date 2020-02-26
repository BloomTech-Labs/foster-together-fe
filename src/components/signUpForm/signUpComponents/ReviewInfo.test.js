import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/renderWithReduxAndRouter'
import ReviewInfo from './ReviewInfo'

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

test('renders ReviewInfo without crashing', () => {
  render(<ReviewInfo user={user} />)
})
