import React from 'react'

import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import SignUp from './SignUpOverlay'

test('renders SignUp without crashing', () => {
  render(<SignUp />)
})

test('renders ui components', () => {
  const { getByText } = render(<SignUp />)

  getByText(/next/i)
  getByText(/log in/i)
  getByText(/registering as a foster neighbor/i)
})
