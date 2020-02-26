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

test('phone is required', async () => {
  const { getByText, queryByText, findByText } = render(<SignUp />)
  const nextButton = getByText(/next/i)

  //no error message at first
  expect(
    queryByText(/please enter a valid phone number/i)
  ).not.toBeInTheDocument()

  //submit blank form
  fireEvent.click(nextButton)

  //should show required messages
  expect(
    await findByText(/please enter a valid phone number/i)
  ).toBeInTheDocument()
})
