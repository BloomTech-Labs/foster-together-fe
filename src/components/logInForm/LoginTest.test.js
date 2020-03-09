import React from 'react'
import { renderWithReduxAndRouter as render } from '../../utils/renderWithReduxAndRouter'
import Login from './LoginForm'
import { Input } from './styles/LoginPage'
import { Logo } from '../signUpForm/styles/signUpOverlayStyles'

test('Login Renders', async () => {
  render(<Login />)
})

test('render components', () => {
  const { getByText } = render(<Login />)
  getByText(/I forgot my password/i)
  getByText(/Enter your email here/i)
  getByText(/Enter your password here/i)
  getByText(/Submit/i)
  getByText(/Children need families/i)
  getByText(/And families need support/i)
})

test('img is displayed', () => {
  const { findByDisplayValue } = render(<Login />)
  findByDisplayValue(Logo)
})

test('inputs displayed', () => {
  const { findByDisplayValue } = render(<Login />)
  findByDisplayValue(Input)
})
