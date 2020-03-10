import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import NeighborTable from './NeighborTable'

const neighbors = []
const families = []

test('renders NeighborTable without crashing', () => {
  render(
    <NeighborTable userType='Neighbors' Data={neighbors} Data2={families} />
  )
})
