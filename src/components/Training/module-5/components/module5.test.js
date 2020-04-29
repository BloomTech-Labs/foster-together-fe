import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers/index.js'
import ModuleFive from './moduleFive'

test('ModuleFive renders', () => {
  render(<ModuleFive />)
})
