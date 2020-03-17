import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import MemberTable from './MemberTable'

const membersArray = []

test('renders MemberTable without crashing', () => {
  render(<MemberTable members={membersArray} />)
})
