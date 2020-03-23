import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import ModuleOne from './moduleOne'

test('ModuleOne Renders', async () => {
  render(<ModuleOne />)
})
