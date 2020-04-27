import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import ModuleOne from './moduleOne'
import StartTraining from './module1-1Letter'
import '@testing-library/jest-dom/extend-expect'

test('ModuleOne Renders', async () => {
  render(<ModuleOne />)
})

test('Module1-1Letter Renders', async () => {
  render(<StartTraining />)
})

test('Testing onClick', async () => {})
