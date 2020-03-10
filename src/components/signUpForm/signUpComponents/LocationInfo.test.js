import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import LocationInfo from './LocationInfo'

const values = {
  address: '',
  city: '',
  zip: '',
  state: '',
}

const handleChange = e => {
  console.log(values)
}

test('renders LocationInfo without crashing', () => {
  render(<LocationInfo values={values} handleChange={handleChange} />)
})
