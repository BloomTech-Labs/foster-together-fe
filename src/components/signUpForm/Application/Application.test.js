import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import Application from './Application'
import ApplicationForm from './ApplicationForm'

test('Application is rendered', () => {
  render(<Application />)
})

test('ApplicationForm is rendered', () => {
  render(<ApplicationForm />)
})
