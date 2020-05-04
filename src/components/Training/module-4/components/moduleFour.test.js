import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import { Module41 } from './components/module4-1'
import { Module42 } from './components/module4-2'
import { Module43 } from './components/module4-3'
import { Module44 } from './components/module4-4'
import ModuleFour from '.'

const handleNext = (e, { activeStep, setActiveStep }) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  if (activeStep === 0 || activeStep === 1 || activeStep === 2) {
    setActiveStep(activeStep + 1)
  } else if (activeStep === 3) {
    setActiveStep(0)
  }
}

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

test('Module four displayed', () => {
  render(<ModuleFour />)
})
