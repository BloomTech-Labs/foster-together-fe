import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'

import ModuleStart2 from './trainingLetter2.js'
import '@testing-library/jest-dom/extend-expect'



test('trainingLetter2 Letter Renders', async () => {
  render(<ModuleStart2/>)
})

test('Testing onClick', async () => {})
