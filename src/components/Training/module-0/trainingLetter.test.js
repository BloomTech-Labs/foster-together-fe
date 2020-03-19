import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import ModuleLetter from './trainingLetter'
import {
  MainContent,
  img,
  LetterContext,
  Circle,
  Letter,
  onClick,
} from '../TrainStyles'
import TrainingNav from '../TrainingNav/NavBar'

test('ModuleLetter', async () => {
  render(<ModuleLetter />)
})

test('text is renderer', () => {
  const { findByDisplayValue } = render(<ModuleLetter />)
  findByDisplayValue(<MainContent />, <TrainingNav />, <Letter />)
  findByDisplayValue({ img })
})
