import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithReduxAndRouter as render } from '../../utils/renderWithReduxAndRouter'
import SignUp from './SignUpOverlay'

test('renders SignUp without crashing', () => {
  render(<SignUp />)
})

test('renders ui components', () => {
  const { getByText, getByPlaceholderText } = render(<SignUp />)

  getByText(/sign up/i)
  getByText(/next/i)
})
