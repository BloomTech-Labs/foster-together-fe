import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import Navigation from './Navigation'

test('renders navigation without crashing', () => {
  render(<Navigation />)
})
