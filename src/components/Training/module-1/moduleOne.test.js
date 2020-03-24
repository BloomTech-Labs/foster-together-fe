import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import ModuleOne from './moduleOne'
import StartTraining from './moduleOneLetter'
import '@testing-library/jest-dom/extend-expect'

test('ModuleOne Renders', async () => {
  render(<ModuleOne />)
})

test('ModuleOneLetter Renders', async () => {
  render(<StartTraining />)
})

test('Testing onClick', async () => {})
