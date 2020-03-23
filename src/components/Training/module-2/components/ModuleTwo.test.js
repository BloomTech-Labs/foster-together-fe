import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../../utils/testHelpers'
import ModuleTwo from '..'
import { BestPractices } from './BestPractices'
import { Checkbox, FormGroup, CheckLabel } from '../styles'
import { MealTips, Survey } from './MealTips'
import { fireEvent } from '@testing-library/react'

test('ModuleTwo is rendered', async () => {
  render(<ModuleTwo />)
})

test('Best Practices is rendered', async () => {
  render(<BestPractices />)
})

test('Radio button', () => {
  render(<MealTips />)
})

test('renders button correctly', () => {
  const { getByText, findByText } = render(<CheckLabel></CheckLabel>)
})
