import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import Module12 from './moduleOne'
import Module11 from './module1-1'
import '@testing-library/jest-dom/extend-expect'

test('Module12 Renders', async () => {
  render(<Module12 />)
})

test('Module1-1Letter Renders', async () => {
  render(<Module11 />)
})

test('Testing onClick', async () => {})
