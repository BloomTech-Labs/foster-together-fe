import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import FullOverlay from './TrainingOverlay'
import TrainingThreeTwo from './Train3.2'
import TrainingThreeOne from './Training3.1'

test('Module 3 render', async () => {
  render(<FullOverlay />)
})

test('Test Three two', async () => {
  render(<TrainingThreeTwo />)
})

// test('Test Three one', async () => {
//   render(<TrainingThreeOne />)
// })
