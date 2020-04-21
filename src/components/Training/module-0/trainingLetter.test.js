import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import ModuleStart from './trainingLetter'
import {
  MainContent,
  img,
  LetterContext,
  Circle,
  Letter,
  onClick,
} from '../TrainStyles'
import TrainingNav from '../TrainingNav/NavBar'

test('ModuleStart', async () => {
  render(<ModuleStart />)
})

test('text is renderer', () => {
  const { findByDisplayValue } = render(<ModuleStart />)
  findByDisplayValue(<MainContent />, <TrainingNav />, <Letter />)
  findByDisplayValue({ img })
})
