import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
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

const mockSetIsNeighbor = () => jest.mock()

test('renders ReviewInfo without crashing', () => {
  render(<ReviewInfo user={user} setIsNeighbor={mockSetIsNeighbor} />)
})
