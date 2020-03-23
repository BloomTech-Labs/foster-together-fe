import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../../utils/testHelpers'
import ModuleTwo from '..'
import { BestPractices } from './BestPractices'

test('ModuleTwo is rendered', async () => {
  render(<ModuleTwo />)
})

test('Best Practices is rendered', async () => {
  render(<BestPractices />)
})
