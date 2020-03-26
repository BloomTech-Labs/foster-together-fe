import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import { Module41 } from './components/module4-1'
import { Module42 } from './components/module4-2'
import { Module43 } from './components/module4-3'
import { Module44 } from './components/module4-4'

test('Module four one', () => {
  render(<Module41 />)
})

test('Module four two', () => {
  render(<Module42 />)
})

test('Module four three', () => {
  render(<Module43 />)
})

test('Module four four', () => {
  render(<Module44 />)
})
